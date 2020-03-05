import React, { useState, useCallback, useEffect } from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sortBy, last, flow, getOr, isEmpty } from 'lodash/fp'

import EmptyImage from '../assets/images/kakao-friends.png'
import InputChat from '../components/InputChat'

import RoomDetailHeader from '../components/RoomDetailHeader'
import RoomDetailDrawer from '../components/RoomDetailDrawer'
import ChatList from '../components/ChatList'

import useSocket from '../hooks/useSocket'
import useAuth from '../hooks/useAuth'

import { FETCH_ROOM_DETAIL, REQUEST_CHAT, REQUEST_IMAGE, REQUEST_INVITE } from '../modules/room'
import { FETCH_USER_LIST } from '../modules/user'

import { RootState } from '../modules'
import { Chat as ChatProps } from '../modules/room'
import { dateConverter } from '../utils/date'

const Container = styled.main`
  background-color: #a0c0d7;
  height: 100vh;
  overflow: auto;
  margin-bottom: 42px;
`

const StyledDivider = styled(Divider)`
  &::before {
    border-top: 0.4px solid rgba(0, 0, 0, 0.3) !important;
  }
  &::after {
    border-top: 0.4px solid rgba(0, 0, 0, 0.3) !important;
  }
`

const DateDivider = styled.small`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`

const RoomDetail: React.FC = () => {
  useAuth()

  const dispatch = useDispatch()
  const { id } = useParams()

  const opponent = useSelector((state: RootState) => state.room.detail.opponent)
  const myUUID = useSelector((state: RootState) => state.room.detail.me)
  const prevMessages = useSelector((state: RootState) => state.room.detail.chatList)
  const title = useSelector((state: RootState) => state.room.detail.title)
  const userList = useSelector((state: RootState) => state.user)

  const latestMessageDate = flow(sortBy('createdAt'), last, getOr('', 'createdAt'))(prevMessages)

  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<ChatProps[]>([])

  /* Drawer 핸들링 */
  const closeDrawer = useCallback(() => {
    setVisible(false)
  }, [])

  const showDrawer = useCallback(() => {
    setVisible(true)
  }, [])

  const onUpload = useCallback(file => {
    dispatch({ type: REQUEST_IMAGE, payload: { image: file, roomId: id } })
  }, [])

  /* 메시지 작성 */
  const onInput = useCallback(e => {
    setMessage(e.target.value)
  }, [])

  /* 채팅방 초대 */
  const onRowClick = useCallback(
    _id => {
      if (isEmpty(opponent)) {
        dispatch({ type: REQUEST_INVITE, payload: { roomId: id, opponent: _id } })
        closeDrawer()
      }
    },
    [id, opponent, closeDrawer, dispatch],
  )

  const fetchRoomDetail = useCallback(id => {
    dispatch({ type: FETCH_ROOM_DETAIL, payload: id })
  }, [])

  const fetchUserList = useCallback(() => {
    dispatch({ type: FETCH_USER_LIST })
  }, [])

  /* 채팅 입력 */
  const onPressEnter = useCallback(() => {
    dispatch({ type: REQUEST_CHAT, payload: { roomId: id, chat: message } })
  }, [message, dispatch, id])

  useEffect(() => {
    fetchUserList()
    fetchRoomDetail(id)
  }, [dispatch])

  useSocket({
    to: 'chat',
    event: 'chat',
    callBack: (chat: ChatProps) => setMessages([...messages, chat]),
    cleanUp: () => {},
    deps: [messages],
  })

  return (
    <Container>
      <RoomDetailHeader name={title} showDrawer={showDrawer} />
      {latestMessageDate && (
        <StyledDivider>
          <DateDivider>{dateConverter(latestMessageDate, 'yyyy년 MM월 dd일')}</DateDivider>
        </StyledDivider>
      )}
      <ChatList
        opponent={opponent.userName}
        messageList={[...prevMessages, ...messages]}
        emptyImage={EmptyImage}
        myUUID={myUUID}
      />
      <InputChat onUpload={onUpload} onInput={onInput} onPressEnter={onPressEnter} />
      <RoomDetailDrawer onClick={onRowClick} onClose={closeDrawer} userList={userList} visible={visible} />
    </Container>
  )
}

export default React.memo(RoomDetail)
