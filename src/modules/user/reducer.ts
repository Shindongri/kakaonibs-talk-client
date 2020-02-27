import { UserAction, UserState } from './types'
import { createReducer } from 'typesafe-actions'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { SET_IS_LOGGED, SET_USER_NAME } from './actions'

/* redux-persist config */
const persistConfig = {
  key: 'user',
  storage,
}

const initialState: UserState = {
  userName: null,
  isLogged: false
}

const user = createReducer<UserState, UserAction>(initialState, {
  [SET_USER_NAME]: (state, action) => ({ ...state, userName: action.payload }),
  [SET_IS_LOGGED]: (state, action) => ({ ...state, isLogged: action.payload })
})

export default persistReducer(persistConfig, user)
