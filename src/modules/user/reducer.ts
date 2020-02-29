import { UserAction, UserState } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_USER_LIST } from './actions'

const initialState: UserState = []

const user = createReducer<UserState, UserAction>(initialState, {
  [SET_USER_LIST]: (state, action) => action.payload,
})

export default user
