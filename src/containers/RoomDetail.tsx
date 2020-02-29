import React, { useState, useCallback, useEffect } from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sortBy, last, flow, getOr } from 'lodash/fp'

import socket from '../socket'

import EmptyImage from '../assets/images/kakao-friends.png'
import InputChat from '../components/InputChat'

import RoomDetailHeader from '../components/RoomDetailHeader'
import RoomDetailDrawer from '../components/RoomDetailDrawer'
import ChatList from '../components/ChatList'

import useAuth from '../hooks/useAuth'
import { FETCH_ROOM_DETAIL, REQUEST_CHAT } from '../modules/room'
import { RootState } from '../modules'
import { Chat as ChatProps } from '../modules/room'
import { dateConverter } from '../utils/date'

const Container = styled.main`
  background-color: #A0C0D7;
  height: 100vh;
  overflow: auto;
  margin-bottom: 42px;
`

const StyledDivider = styled(Divider)`
  &::before {
    border-top: .4px solid rgba(0,0,0,0.3) !important;
  }
  &::after {
    border-top: .4px solid rgba(0,0,0,0.3) !important;
  }
`

const DateDivider = styled.small`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
`


const RoomDetail: React.FC = () => {
  useAuth()

  const dispatch = useDispatch()
  const { id } = useParams()

  const opponent = useSelector((state: RootState) => state.room.detail.opponent)
  const myUUID = useSelector((state: RootState) => state.room.detail.me)
  const prevMessages = useSelector((state: RootState) => state.room.detail.chatList)
  const latestMessageDate = flow(
    sortBy('createdAt'),
    last,
    getOr('', 'createdAt')
  )(prevMessages)

  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatProps[]>([])

  useEffect(() => {
    dispatch({ type: FETCH_ROOM_DETAIL, payload: id })
  }, [dispatch, id])

  useEffect(() => {
    socket.on('chat', (chat: ChatProps) => {
      console.log(chat)

      setMessages([...messages, chat])
    })
  }, [])

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  const showDrawer = useCallback(() => {
    setVisible(true)
  }, [])

  const onInput = useCallback(e => {
    setMessage(e.target.value)
  }, [])

  const onPressEnter = useCallback(() => {
    dispatch({ type: REQUEST_CHAT, payload: { roomId: id, chat: message } })

    //TODO:: Input Clear
  }, [message])

  return (
    <Container>
      <RoomDetailHeader name={ opponent.userName } showDrawer={ showDrawer } />
      {
        latestMessageDate && (
          <StyledDivider>
            <DateDivider>{ dateConverter(latestMessageDate, 'yyyy년 MM월 dd일') }</DateDivider>
          </StyledDivider>
        )
      }
      <ChatList messageList={ [...prevMessages, ...messages] } emptyImage={ EmptyImage } myUUID={ myUUID } />
      <InputChat onInput={ onInput } onPressEnter={ onPressEnter } />
      <RoomDetailDrawer onClose={ onClose } userList={ [] } visible={ visible } />
    </Container>
  )
}

export default React.memo(RoomDetail)
