import { call, put, all, takeLatest } from 'redux-saga/effects'
import axios from '../axios'
import { push } from 'connected-react-router'

import errorHandler from '../utils/errorHandler'
import { REQUEST_SIGNIN, REQUEST_SIGNOUT, setUserName, setIsLogged, setUUID } from '../modules/auth'

const requestSignIn = function* ({ payload }: any) {
  try {
    const { status, data: { statusText, user: { userName, uuid, isLogged } } } = yield call(() => axios.post('/user/signin', payload))

    if (status === 200 && statusText === 'OK') {
      yield put(setUserName(userName))
      yield put(setUUID(uuid))
      yield put(setIsLogged(isLogged))

      yield put(push('/users'))
    }
  } catch (e) {
    errorHandler(e)
  }
}

const requestSignOut = function* ({ payload }: any) {
  try {
    const { status, data: { statusText } } = yield call(() => axios.post(`/user/signout`, payload))

    if (status === 200 && statusText === 'OK') {
      yield put(setUserName(null))
      yield put(setUUID(null))
      yield put(setIsLogged(false))
    }
  } catch (e) {
    errorHandler(e)
  }
}

export default function* roomSaga() {
  yield all([
    takeLatest([REQUEST_SIGNIN], requestSignIn),
    takeLatest([REQUEST_SIGNOUT], requestSignOut)
  ])
}
