import { call, put, all, takeLatest } from 'redux-saga/effects'
import axios from '../axios'

import errorHandler from '../utils/errorHandler'
import { setUserList, FETCH_USER_LIST } from '../modules/user'

const fetchUserList = function* () {
  try {
    const { status, data: { list } } = yield call(() => axios.get('http://localhost:8080/user'))

    if (status === 200) {
      yield put(setUserList(list))
    }
  } catch (e) {
    errorHandler(e)
  }
}

export default function* userSaga() {
  yield all([
    takeLatest([FETCH_USER_LIST], fetchUserList),
  ])
}
