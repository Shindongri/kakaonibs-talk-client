import socket from '../socket'

export type SocketProps = {
  to: string
  event: string
  data?: any
  cb?: (a: any) => void
}

export const useSocket = ({ to, event, cb, data }: SocketProps) => {
  const on = () => socket(to).on(event, cb ? cb : () => {})
  const emit = () => socket(to).emit(event, data)
  const disconnect = () => socket(to).emit('disconnect')

  return [on, emit, disconnect] as [typeof on, typeof emit, typeof disconnect]
}
