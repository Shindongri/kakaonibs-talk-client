import { all } from 'redux-saga/effects'

import auth from './auth'
import room from './room'
import user from './user'

export default function* rootSaga() {
  yield all([
    auth(),
    room(),
    user()
  ])
}
