import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { map } from 'lodash/fp'
import styled from 'styled-components'

import { TopHeader, InputSearch, Sidebar, RoomCreateModal, RoomList, Room } from '../components'
import { useAuth, useBoolean, useSocket, useInput, useRooms, useRequest } from '../hooks'

import { FETCH_ROOM_LIST, REQUEST_CHAT_ROOM, Room as RoomProps } from '../modules/room'
import { RootState } from '../modules'

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
  }
`

const Rooms: React.FC = () => {
  useAuth()
  const dispatch = useDispatch()

  const prevRoomList = useSelector((state: RootState) => state.room.list)

  const [rooms, setRooms] = useRooms([])
  const [visible, showModal, closeModal] = useBoolean(false)
  const [title, setTitle] = useInput(null)
  const [onNewRoom, , offNewRoom] = useSocket({
    to: 'room',
    event: 'newRoom',
    cb: (newRoom: RoomProps) => setRooms(newRoom),
  })

  const onSave = useRequest({ type: REQUEST_CHAT_ROOM, payload: { title } })
  const fetchRoomList = useRequest({ type: FETCH_ROOM_LIST })

  useEffect(() => {
    fetchRoomList()
    onNewRoom()

    return () => {
      offNewRoom()
    }
  }, [dispatch, rooms, fetchRoomList, onNewRoom, offNewRoom])

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="채팅" icon="plus" onClick={showModal} />
        <RoomCreateModal visible={visible} onInput={setTitle} onCancel={closeModal} onOk={onSave} />
        <InputSearch placeholder="채팅방 이름, 참여자 검색" />
        <section>
          <RoomList>
            {map(({ _id, updatedAt, title }) => <Room key={_id} _id={_id} title={title} updatedAt={updatedAt} />)([
              ...prevRoomList,
              ...rooms,
            ])}
          </RoomList>
        </section>
      </main>
    </Container>
  )
}

export default React.memo(Rooms)
