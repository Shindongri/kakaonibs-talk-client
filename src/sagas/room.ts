import { call, put, all, takeLatest } from 'redux-saga/effects'
import axios from '../axios'

import errorHandler from '../utils/errorHandler'
import {
  FETCH_ROOM_LIST,
  FETCH_ROOM_DETAIL,
  REQUEST_CHAT,
  setRoomList,
  setRoomDetail,
  REQUEST_CHAT_ROOM
} from '../modules/room'

const fetchRoomList = function* () {
  try {
    const { status, data: { statusText, list } } = yield call(() => axios.get('/room'))

    if (status === 200 && statusText === 'OK') {
      yield put(setRoomList(list))
    }
  } catch (e) {
    errorHandler(e)
  }
}

const fetchRoomDetail = function* ({ payload }: any) {
  try {
    const { status, data: { statusText, detail } } = yield call(() => axios.get(`/room/${ payload }`))

    if (status === 200 && statusText === 'OK') {
      yield put(setRoomDetail(detail))
    }
  } catch (e) {
    errorHandler(e)
  }
}

const requestChat = function* ({ payload }: any) {
  try {
    const { status, data: { statusText } } = yield call(() => axios.post(`/room/${ payload.roomId }/chat`, { chat: payload.chat }))

    if (status === 200 && statusText === 'OK') {
      console.log('OK')
    } else {
      console.error('FAIL')
    }
  } catch (e) {
    errorHandler(e)
  }
}

const requestChatRoom = function* () {
  try {
    const { status, data: { statusText, detail: { _id } } } = yield call(() => axios.post('/room'))

    if (status === 200 && statusText === 'OK') {
      // `/room/${ _id }`
    } else {
      console.error('FAIL')
    }
  } catch (e) {
    errorHandler(e)
  }
}

export default function* roomSaga() {
  yield all([
    takeLatest([REQUEST_CHAT_ROOM], requestChatRoom),
    takeLatest([REQUEST_CHAT], requestChat),
    takeLatest([FETCH_ROOM_LIST], fetchRoomList),
    takeLatest([FETCH_ROOM_DETAIL], fetchRoomDetail)
  ])
}
