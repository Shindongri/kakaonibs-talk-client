import { useCallback, useState } from 'react'
import { Room } from '../modules/room'

export const useRooms = (defaultValue: Room[]) => {
  const [rooms, setRooms] = useState<Room[]>(defaultValue)

  const addRoom = useCallback(
    (room: Room) => {
      setRooms([...rooms, room])
    },
    [rooms],
  )

  return [rooms, addRoom] as [typeof rooms, typeof addRoom]
}
