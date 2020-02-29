import { createAction } from 'typesafe-actions'

/* 액션 Type */
export const REQUEST_SIGNIN = 'auth/REQUEST_SIGNIN'
export const REQUEST_SIGNOUT = 'auth/REQUEST_SIGNOUT'
export const SET_USER_NAME = 'auth/SET_USER_NAME'
export const SET_IS_LOGGED = 'auth/SET_IS_LOGGED'
export const SET_UUID = 'auth/SET_UUID'

/* 액션 생성 함수 */
export const requestSignIn = createAction(REQUEST_SIGNIN)()
export const requestSignout = createAction(REQUEST_SIGNOUT)()
export const setUserName = createAction(SET_USER_NAME)<string>()
export const setIsLogged = createAction(SET_IS_LOGGED)<boolean>()
export const setUUID = createAction(SET_UUID)<string>()
