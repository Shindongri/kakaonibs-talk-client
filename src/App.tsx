import React, { FC } from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import reset from 'styled-reset'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules'
import rootSaga from './sagas'

import Sidebar from './components/Sidebar'

// import Login from './containers/Login'
import Friends from './containers/Friends'
import Chats from './containers/Chats'
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

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
    padding: 12px;
  }
`

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

const App: FC = () => (
  <Provider store={ store }>
    <Router>
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/friends" component={ Friends } />
          <Route path="/chats" component={ Chats } />
          <Route path="/setting" component={ Setting } />
        </Switch>
        <GlobalStyle />
      </Container>
    </Router>
  </Provider>
)

export default App