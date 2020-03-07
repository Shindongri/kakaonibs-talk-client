import { useCallback, useState } from 'react'
import { Chat } from '../modules/room'

export const useMessages = (defaultValue: Chat[]) => {
  const [messages, setMessages] = useState<Chat[]>(defaultValue)

  const addMessage = useCallback((message: Chat) => {
    setMessages([...messages, message])
  }, [])

  return [messages, addMessage] as [typeof messages, typeof addMessage]
}
