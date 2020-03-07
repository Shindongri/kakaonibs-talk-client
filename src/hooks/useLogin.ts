import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isEmpty } from 'lodash/fp'
import { REQUEST_SIGNIN } from '../modules/auth'
import { message } from 'antd'

type UserName = string | null

export const useLogin = (userName: UserName) => {
  const dispatch = useDispatch()

  return useCallback(() => {
    if (isEmpty(userName)) {
      message.error('아이디를 입력해주세요.')
    } else {
      dispatch({ type: REQUEST_SIGNIN, payload: { userName } })
    }
  }, [dispatch, userName])
}
