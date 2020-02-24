import React from 'react'
import { map } from 'lodash/fp'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'

import { ChatItem, ChatList }  from '../components/Chat'

import MockData from './mock.json'

const Chats: React.FC = () => {
  return (
    <main>
      <TopHeader text="채팅" icon="plus" />
      <InputSearch placeholder="채팅방 이름, 참여자 검색" />
      <section>
        <ChatList>
          {
            map(({ id, name, latestMessage, updatedAt }) => <ChatItem key={ id } name={ name } latestMessage={ latestMessage } updatedAt={ updatedAt } />)(MockData.chats)
          }
        </ChatList>
      </section>
    </main>
  )
}

export default Chats
