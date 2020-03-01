import { all, fork } from 'redux-saga/effects'

import auth from './auth'
import room from './room'
import user from './user'

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(room),
    fork(user)
  ])
}
