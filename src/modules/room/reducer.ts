import { RoomAction, RoomState } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_ROOM_LIST, SET_ROOM_DETAIL } from './actions'

const initialState: RoomState = {
  list: [],
  detail: {
    title: '',
    me: '',
    opponent: {
      _id: '',
      userName: ''
    },
    chatList: []
  }
}

const room = createReducer<RoomState, RoomAction>(initialState, {
  [SET_ROOM_LIST]: (state, action) => ({ ...state, list: action.payload }),
  [SET_ROOM_DETAIL]: (state, action) => ({ ...state, detail: action.payload })
})

export default room
