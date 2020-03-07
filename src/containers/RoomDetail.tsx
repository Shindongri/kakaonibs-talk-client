import React, { useCallback, useEffect } from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { sortBy, last, flow, getOr } from 'lodash/fp'

import EmptyImage from '../assets/images/kakao-friends.png'

import { InputChat, RoomDetailHeader, RoomDetailDrawer, ChatList } from '../components'
import { useSocket, useAuth, useDrawer, useInput, useMessages, useRequest } from '../hooks'

import { FETCH_ROOM_DETAIL, REQUEST_CHAT, REQUEST_IMAGE } from '../modules/room'

import { RootState } from '../modules'
import { Chat } from '../modules/room'
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

const getLatestMessageDate = (chatList: Chat[]) => flow(sortBy('createdAt'), last, getOr('', 'createdAt'))(chatList)

const RoomDetail: React.FC = () => {
  useAuth()

  const dispatch = useDispatch()
  const { id } = useParams()
  const { me, chatList, title } = useSelector((state: RootState) => state.room.detail)
  const userList = useSelector((state: RootState) => state.user)

  const [message, setMessage] = useInput(null)
  const [messages, setMessages] = useMessages([])
  const [visible, showDrawer, closeDrawer] = useDrawer(false)
  const [onChat] = useSocket({ to: 'chat', event: 'chat', cb: chat => setMessages(chat) })

  const onUpload = useCallback(file => {
    dispatch({ type: REQUEST_IMAGE, payload: { image: file, roomId: id } })
  }, [])

  /* TODO:: 채팅방 초대 */
  const onRowClick = useCallback(_id => {}, [])

  const fetchRoomDetail = useRequest({ type: FETCH_ROOM_DETAIL, payload: id })
  const onPressEnter = useRequest({ type: REQUEST_CHAT, payload: { roomId: id, chat: message } })

  const latestDate = getLatestMessageDate(chatList)

  useEffect(() => {
    fetchRoomDetail()

    onChat()
  }, [dispatch, id, fetchRoomDetail])

  return (
    <Container>
      <RoomDetailHeader name={title} showDrawer={showDrawer} />
      {latestDate && (
        <StyledDivider>
          <DateDivider>{dateConverter(latestDate, 'yyyy년 MM월 dd일')}</DateDivider>
        </StyledDivider>
      )}
      <ChatList messageList={[...chatList, ...messages]} emptyImage={EmptyImage} myUUID={me} />
      <InputChat onUpload={file => onUpload(file)} onInput={setMessage} onPressEnter={onPressEnter} />
      <RoomDetailDrawer onClick={onRowClick} onClose={closeDrawer} userList={userList} visible={visible} />
    </Container>
  )
}

export default React.memo(RoomDetail)
