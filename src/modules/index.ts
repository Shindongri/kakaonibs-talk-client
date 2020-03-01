import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import auth from './auth'
import user from './user'
import room from './room'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
  user,
  room
})


export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
