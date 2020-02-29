import { combineReducers } from 'redux'

import auth from './auth'
import user from './user'
import room from './room'

const rootReducer = combineReducers({
  auth,
  user,
  room
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
