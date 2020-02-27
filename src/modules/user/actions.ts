import { createAction } from 'typesafe-actions'

/* 액션 Type */
export const SET_USER_NAME = 'user/SET_USER_NAME'
export const SET_IS_LOGGED = 'user/SET_IS_LOGGED'

/* 액션 생성 함수 */
export const setUserName = createAction(SET_USER_NAME)<string>()
export const setIsLogged = createAction(SET_IS_LOGGED)<boolean>()
