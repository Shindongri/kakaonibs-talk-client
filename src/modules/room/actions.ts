import { createAction } from 'typesafe-actions'
import { Room, RoomDetail } from './types'

/* 액션 Type */
export const REQUEST_INVITE = 'room/REQUEST_INVITE'
export const REQUEST_CHAT_ROOM = 'room/REQUEST_CHAT_ROOM'
export const REQUEST_CHAT = 'room/REQUEST_CHAT'
export const REQUEST_IMAGE = 'room/REQUEST_IMAGE'
export const FETCH_ROOM_LIST = 'room/FETCH_ROOM_LIST'
export const FETCH_ROOM_DETAIL = 'room/FETCH_ROOM_DETAIL'
export const SET_ROOM_LIST = 'room/SET_ROOM_LIST'
export const SET_ROOM_DETAIL = 'room/SET_ROOM_DETAIL'

/* 액션 생성 함수 */
export const requestInvite = createAction(REQUEST_INVITE)()
export const requestChatRoom = createAction(REQUEST_CHAT_ROOM)()
export const requestChat = createAction(REQUEST_CHAT)()
export const requestImage = createAction(REQUEST_IMAGE)()
export const fetchRoomList = createAction(FETCH_ROOM_LIST)()
export const fetchRoomDetail = createAction(FETCH_ROOM_DETAIL)()
export const setRoomList = createAction(SET_ROOM_LIST)<Room[]>()
export const setRoomDetail = createAction(SET_ROOM_DETAIL)<RoomDetail>()
