import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { map, getOr } from 'lodash/fp'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'
import Sidebar from '../components/Sidebar'
import RoomCreateModal from '../components/RoomCreateModal'

import RoomList  from '../components/RoomList'
import Room from '../components/Room'

import useAuth from '../hooks/useAuth'

import { FETCH_ROOM_LIST, REQUEST_CHAT_ROOM, Room as RoomProps } from '../modules/room'
import { RootState } from '../modules'
import socket from '../socket'

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
  }
`

const Rooms: React.FC = () => {
  const dispatch = useDispatch()

  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState(null)
  const [rooms, setRooms] = useState<RoomProps[]>([])

  const prevRoomList = useSelector((state: RootState) => state.room.list)

  const showModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  const onInput = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const onSave = useCallback(() => {
    dispatch({ type: REQUEST_CHAT_ROOM, payload: { title } })
  }, [dispatch, title])

  useAuth()
  useEffect(() => {
    dispatch({ type: FETCH_ROOM_LIST })
  }, [dispatch])

  useEffect(() => {
    socket('room').on('newRoom', (newRoom: RoomProps) => {
      setRooms([...rooms, newRoom])
    })

    return () => {
      socket('room').emit('disconnect')
    }
  }, [])

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="채팅" icon="plus" onClick={ showModal } />
        <RoomCreateModal visible={ visible } onInput={ onInput } onCancel={ closeModal } onOk={ onSave } />
        <InputSearch placeholder="채팅방 이름, 참여자 검색" />
        <section>
          <RoomList>
            {
              map(({ _id, opponent, updatedAt, title }) => <Room key={ _id } _id={ _id } title={ title } opponent={ getOr('', 'userName')(opponent) } updatedAt={ updatedAt } />)([...prevRoomList, ...rooms])
            }
          </RoomList>
        </section>
      </main>
    </Container>
  )
}

export default React.memo(Rooms)
