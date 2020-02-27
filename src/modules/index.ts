import { combineReducers, Reducer } from 'redux'

import user from './user'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

/* redux-persist config */
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user,
})

const persistedReducer: Reducer<any, any> = persistReducer(persistConfig, rootReducer)

export default persistedReducer

export type RootState = ReturnType<typeof rootReducer>
