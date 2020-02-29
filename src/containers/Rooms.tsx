import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { map } from 'lodash/fp'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'
import Sidebar from '../components/Sidebar'

import RoomList  from '../components/RoomList'
import Room from '../components/Room'

import useAuth from '../hooks/useAuth'

import { FETCH_ROOM_LIST } from '../modules/room'
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
  const dispatch = useDispatch()

  useAuth()
  useEffect(() => {
    dispatch({ type: FETCH_ROOM_LIST })
  }, [dispatch])

  const roomList = useSelector((state: RootState) => state.room.list)

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="채팅" icon="plus" />
        <InputSearch placeholder="채팅방 이름, 참여자 검색" />
        <section>
          <RoomList>
            {
              map(({ _id, title, latestMessage, updatedAt }) => <Room key={ _id } _id={ _id } title={ title } latestMessage={ latestMessage } updatedAt={ updatedAt } />)(roomList)
            }
          </RoomList>
        </section>
      </main>
    </Container>
  )
}

export default React.memo(Rooms)
