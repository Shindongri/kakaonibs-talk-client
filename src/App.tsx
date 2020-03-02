import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter, routerMiddleware as connectedReactRouterMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import persistedReducer, { history } from './modules'
import rootSaga from './sagas'

import Login from './containers/Login'
import Users from './containers/Users'
import Rooms from './containers/Rooms'
import RoomDetail from './containers/RoomDetail'
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
  ${reset}
  font-family: 'Open Sans', sans-serif;
  padding: 60px 0 60px;

  main {
    animation: ${PopIn} .5s ease-in-out;
  }
`

/* redux-saga config */
const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = connectedReactRouterMiddleware(history)
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware, routerMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
const store = createStore(persistedReducer, enhancer)
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/room/:id" component={RoomDetail} />
          <Route path="/login" component={Login} />
          <Route exact path={['/', '/users']} component={Users} />
          <Route path="/setting" component={Setting} />
        </Switch>
        <GlobalStyle />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
