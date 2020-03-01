import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { map, getOr } from 'lodash/fp'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'
import Sidebar from '../components/Sidebar'

import RoomList  from '../components/RoomList'
import Room from '../components/Room'

import useAuth from '../hooks/useAuth'

import {FETCH_ROOM_LIST, REQUEST_CHAT_ROOM} from '../modules/room'
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

  useEffect(() => {
    dispatch({ type: FETCH_ROOM_LIST })
  }, [dispatch])

  const roomList = useSelector((state: RootState) => state.room.list)

  const onCreate = useCallback(() => {
    dispatch({ type: REQUEST_CHAT_ROOM })
  }, [dispatch])

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="채팅" icon="plus" menuList={ [{ id: 0, menuName: '채팅방 생성', onClick: onCreate }] } />
        <InputSearch placeholder="채팅방 이름, 참여자 검색" />
        <section>
          <RoomList>
            {
              map(({ _id, opponent, updatedAt }) => <Room key={ _id } _id={ _id } opponent={ getOr('', 'userName')(opponent) } updatedAt={ updatedAt } />)(roomList)
            }
          </RoomList>
        </section>
      </main>
    </Container>
  )
}

export default React.memo(Rooms)
