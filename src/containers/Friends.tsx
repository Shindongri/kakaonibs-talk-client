import React from 'react'
import { map, flow, filter } from 'lodash/fp'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'

import { FriendList, FriendItem, FriendProps } from '../components/Friend'

import MockData from './mock.json'

const HeaderTitle = styled.h6`
  font-size: 13px;
  font-weight: 500;
  color: rgb(177, 177, 177);
  border-top: 1px solid #F7F7F7;
  border-bottom: 1px solid #F7F7F7;
  padding: 7px 0;
`

const Friends: React.FC = () => {
  return (
    <main>
      <TopHeader text="친구" count={ 18 } icon="user-add" />
      <InputSearch placeholder="이름으로 검색" />
      <section>
        <header>
          <HeaderTitle>내 프로필</HeaderTitle>
        </header>
        <FriendList>
          {
            flow(
              filter(({ isMe }) => isMe),
              map((item: FriendProps) => <FriendItem key={ item.id } name={ item.name } imageUrl={ item.imageUrl } tag={ item.tag } isMe={ item.isMe } />)
            )(MockData.friends)
          }
        </FriendList>
      </section>
      <section>
        <header>
          <HeaderTitle>친구</HeaderTitle>
        </header>
        <FriendList>
          {
            flow(
              filter(({ isMe }) => !isMe),
              map((item: FriendProps) => <FriendItem key={ item.id } name={ item.name } imageUrl={ item.imageUrl } tag={ item.tag } isMe={ item.isMe } />)
            )(MockData.friends)
          }
        </FriendList>
      </section>
    </main>
  )
}

export default Friends
