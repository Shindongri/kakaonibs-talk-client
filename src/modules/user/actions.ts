import { createAction } from 'typesafe-actions'
import { User } from './types'

/* 액션 Type */
export const FETCH_USER_LIST = 'user/FETCH_USER_LIST'
export const SET_USER_LIST = 'user/SET_USER_LIST'

/* 액션 생성 함수 */
export const fetchUserList = createAction(FETCH_USER_LIST)()
export const setUserList = createAction(SET_USER_LIST)<User[]>()
