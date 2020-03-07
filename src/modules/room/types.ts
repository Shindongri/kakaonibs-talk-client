import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type RoomAction = ActionType<typeof actions>

export type Chat = {
  _id: string
  room: string
  user: string
  chat: string | null
  image: string | null
  createdAt: Date
}

export type Room = {
  _id: string
  title: string
  imageURL?: string
  owner?: string
  updatedAt: string
}

export type RoomDetail = {
  title: string | null
  me: string
  chatList: Chat[]
}

export type RoomState = {
  list: Room[]
  detail: RoomDetail
}
