import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const useRequest = ({ type, payload }: { type: string; payload?: any }) => {
  const dispatch = useDispatch()

  return useCallback(() => {
    dispatch({ type, payload })
  }, [dispatch])
}
