import React from 'react'
import { useSelector } from 'react-redux'
import { map } from 'lodash/fp'
import styled from 'styled-components'

import { RootState } from '../modules'
import TopHeader from '../components/TopHeader'
import InputSearch from '../components/InputSearch'
import User, { UserProps } from '../components/User'
import UserList from '../components/UserList'
import Sidebar from '../components/Sidebar'

import useAuth from '../hooks/useAuth'

import MockData from './mock.json'

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
  }
`

const StyledSection = styled.section`
  padding: 12px;
`

const HeaderTitle = styled.h6`
  font-size: 13px;
  font-weight: 500;
  color: rgb(177, 177, 177);
  border-top: 1px solid #F7F7F7;
  border-bottom: 1px solid #F7F7F7;
  padding: 7px 0;
`

const Users: React.FC = () => {
  useAuth()

  const userName = useSelector((state: RootState) => state.user.userName)

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="친구" count={ 18 } icon="user-add" />
        <InputSearch placeholder="이름으로 검색" />
        <StyledSection>
          <header>
            <HeaderTitle>내 프로필</HeaderTitle>
          </header>
          <UserList>
            <User key={ 0 } name={ userName } />
          </UserList>
        </StyledSection>
        <StyledSection>
          <header>
            <HeaderTitle>친구</HeaderTitle>
          </header>
          <UserList>
            {
              map((item: UserProps) => <User key={ item.id } name={ item.name } imageUrl={ item.imageUrl } tag={ item.tag } />)(MockData.users)
            }
          </UserList>
        </StyledSection>
      </main>
    </Container>
  )
}

export default Users
