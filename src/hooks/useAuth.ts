import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { RootState } from '../modules'

export const useAuth = () => {
  const location = useLocation()
  const history = useHistory()

  const isLogged = useSelector((state: RootState) => state.auth.isLogged)

  useEffect(() => {
    if (!isLogged) {
      history.push('/login')
    }
  }, [location.pathname, history, isLogged])
}
