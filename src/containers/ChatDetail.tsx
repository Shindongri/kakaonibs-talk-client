import React, { useState, useCallback } from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
// import { useParams } from 'react-router-dom'

import MockData from './mock.json'

import InputChat from '../components/InputChat'

import ChatDetailHeader from '../components/ChatDetailHeader'
import ChatDetailDrawer from '../components/ChatDetailDrawer'

import MessageToReceive from '../components/MessageToReceive'
import MessageToSend from '../components/MessageToSend'

import useAuth from '../hooks/useAuth'

import EmptyImage from '../assets/images/kakao-friends.png'

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

const ChatDetail: React.FC = () => {
  useAuth()

  // const { id } = useParams()
  const [visible, setVisible] = useState(false)

  const onClose = useCallback(() => {
    setVisible(false)
  }, [])

  const showDrawer = useCallback(() => {
    setVisible(true)
  }, [])

  return (
    <Container>
      <ChatDetailHeader name="신동리" showDrawer={ showDrawer } />
      <StyledDivider>
        <DateDivider>2020년 2월 21일</DateDivider>
      </StyledDivider>
      <MessageToSend msg="Hi!" createdAt="오후 7:10" />
      <MessageToReceive imageUrl={ EmptyImage } name="김가희" msg="MEEEE" createdAt="오후 8:10" />
      <MessageToSend msg="GQEEWFWQF" createdAt="오후 8:20" />
      <InputChat />
      <ChatDetailDrawer onClose={ onClose } userList={ MockData.users } visible={ visible } />
    </Container>
  )
}

export default ChatDetail
