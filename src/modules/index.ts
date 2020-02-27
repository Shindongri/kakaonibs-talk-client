import { combineReducers, Reducer } from 'redux'

import auth from './auth'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

/* redux-persist config */
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  auth,
})

const persistedReducer: Reducer<any, any> = persistReducer(persistConfig, rootReducer)

export default persistedReducer

export type RootState = ReturnType<typeof rootReducer>
