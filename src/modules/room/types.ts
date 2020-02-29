import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import { User as UserProps } from '../user'

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
  opponent: string;
  owner?: string;
  updatedAt: string;
}

export type RoomDetail = {
  opponent: UserProps;
  me: string;
  chatList: Chat[];
}

export type RoomState = {
  list: Room[];
  detail: RoomDetail;
}
