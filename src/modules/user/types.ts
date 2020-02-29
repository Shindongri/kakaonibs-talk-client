import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type UserAction = ActionType<typeof actions>

export type User = {
  id?: number;
  name: string | null;
  imageUrl?: string | null;
  tag?: string | null;
}

export type UserState = User[]
