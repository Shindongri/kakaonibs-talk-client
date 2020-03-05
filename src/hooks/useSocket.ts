import { useEffect } from 'react'
import socket from '../socket'

type UseSocketProps = {
  to: string
  event: string
  callBack: (a: any) => void
  cleanUp: () => void
  deps?: any[]
}

const useSocket = ({ to, event, callBack, cleanUp, deps = [] }: UseSocketProps) => {
  useEffect(() => {
    socket(to).on(event, callBack)

    return () => {
      cleanUp()
    }
  }, deps)
}

export default useSocket
