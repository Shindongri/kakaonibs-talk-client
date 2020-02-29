import { call, put, all, takeLatest } from 'redux-saga/effects'
import axios from '../axios'

import errorHandler from '../utils/errorHandler'
import { REQUEST_SIGNIN, REQUEST_SIGNOUT, setUserName, setIsLogged, setUUID } from '../modules/auth'

const requestSignIn = function* ({ payload }: any) {
  try {
    const { status, data: { statusText, user: { userName, uuid, isLogged } } } = yield call(() => axios.post('http://localhost:8080/user/signin', payload))

    if (status === 200 && statusText === 'OK') {
      yield put(setUserName(userName))
      yield put(setUUID(uuid))
      yield put(setIsLogged(isLogged))
    }
  } catch (e) {
    errorHandler(e)
  }
}

const requestSignout = function* ({ payload }: any) {
  try {
    const { status, data: { statusText } } = yield call(() => axios.post(`http://localhost:8080/user/signout`, payload))

    if (status !== 200 || statusText !== 'OK') {
      console.error('로그아웃에 실패하였습니다.')
    }
  } catch (e) {
    errorHandler(e)
  }
}

export default function* roomSaga() {
  yield all([
    takeLatest([REQUEST_SIGNIN], requestSignIn),
    takeLatest([REQUEST_SIGNOUT], requestSignout)
  ])
}
