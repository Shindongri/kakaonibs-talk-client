import React from 'react'
import { map } from 'lodash/fp'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'

import { FriendList, FriendItem } from '../components/Friend'

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
          <FriendItem key={ 0 } name="신동리" isMe />
        </FriendList>
      </section>
      <section>
        <header>
          <HeaderTitle>친구</HeaderTitle>
        </header>
        <FriendList>
          {
            map(({ id, imageUrl, name, tag, isMe }) => <FriendItem key={ id } name={ name } imageUrl={ imageUrl } tag={ tag } isMe={ isMe } />)([])
          }
        </FriendList>
      </section>
    </main>
  )
}

export default Friends
