import { useEffect } from 'react'
import { useSocket, SocketProps } from '../hooks'

export const useSocketRegister = ({ to, event, cb }: SocketProps) => {
  const [onSocket, , offSocket] = useSocket({ to, event, cb })

  useEffect(() => {
    onSocket()
    return () => {
      offSocket()
    }
  }, [onSocket, offSocket, cb])
}
