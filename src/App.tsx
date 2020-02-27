import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import persistedReducer  from './modules'
import rootSaga from './sagas'

import Login from './containers/Login'
import Users from './containers/Users'
import Chats from './containers/Chats'
import ChatDetail from './containers/ChatDetail'
import Setting from './containers/Setting'

const PopIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`

const GlobalStyle = createGlobalStyle`
  ${ reset }
  font-family: 'Open Sans', sans-serif;
  padding: 60px 0 60px;

  main {
    animation: ${ PopIn } .5s ease-in-out;
  }
`

/* redux-saga config */
const sagaMiddleware = createSagaMiddleware()
const enhancer = process.env.NODE_ENV === 'production' ? compose(applyMiddleware(sagaMiddleware)) : composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

const App: React.FC = () => (
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ persistor }>
      <Router>
        <Switch>
          <Route exact path="/chats" component={ Chats } />
          <Route path="/chats/:id" component={ ChatDetail } />
          <Route path="/login" component={ Login } />
          <Route exact path={['/', '/users']} component={ Users } />
          <Route path="/setting" component={ Setting } />
        </Switch>
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
)

export default App
