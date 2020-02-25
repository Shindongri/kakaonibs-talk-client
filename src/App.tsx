import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules'
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

/* redux-persist config */
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

/* redux-saga config */
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

const App: FC = () => (
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
      <Router>
        <Switch>
          <Route exact path="/chats" component={ Chats } />
          <Route path="/chats/:id" component={ ChatDetail } />
          <Route path="/login" component={ Login } />
          <Route path="/users" component={ Users } />
          <Route path="/setting" component={ Setting } />
        </Switch>
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
)

export default App
