import React from 'react'
import { map } from 'lodash/fp'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'
import Sidebar from '../components/Sidebar'

import ChatList  from '../components/ChatList'
import Chat  from '../components/Chat'

import MockData from './mock.json'
import styled from "styled-components";

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
  }
`

const Chats: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="채팅" icon="plus" />
        <InputSearch placeholder="채팅방 이름, 참여자 검색" />
        <section>
          <ChatList>
            {
              map(({ id, name, latestMessage, updatedAt }) => <Chat key={ id } id={ id } name={ name } latestMessage={ latestMessage } updatedAt={ updatedAt } />)(MockData.chats)
            }
          </ChatList>
        </section>
      </main>
    </Container>
  )
}

export default Chats
