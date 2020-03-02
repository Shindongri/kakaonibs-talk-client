import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type UserAction = ActionType<typeof actions>

export type User = {
  _id: string
  userName: string | null
  imageURL?: string | null
  onClick?: () => void
}

export type UserState = User[]
