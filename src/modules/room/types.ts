import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type RoomAction = ActionType<typeof actions>

export type Chat = {
  _id: string;
  room: string;
  user: string;
  chat: string | null;
  imageURL: string | null;
  createdAt: Date;
}

export type Room = {
  _id: string;
  imageURL?: string;
  title: string;
  owner?: string;
  latestMessage: string;
  updatedAt: string;
}

export type RoomDetail = {
  title: string;
  me: string;
  chatList: Chat[];
}

export type RoomState = {
  list: Room[];
  detail: RoomDetail;
}
