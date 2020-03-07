import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { map } from 'lodash/fp'
import styled from 'styled-components'

import { RootState } from '../modules'
import { FETCH_USER_LIST, User as UserProps } from '../modules/user'

import { TopHeader, InputSearch, User, UserList, Sidebar } from '../components'
import { useAuth } from '../hooks'

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
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
  padding: 7px 0;
`

const Users: React.FC = () => {
  const dispatch = useDispatch()

  useAuth()
  useEffect(() => {
    dispatch({ type: FETCH_USER_LIST })
  }, [dispatch])

  const userName = useSelector((state: RootState) => state.auth.userName)
  const userList = useSelector((state: RootState) => state.user)

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text="친구" count={userList.length} icon="user-add" />
        <InputSearch placeholder="이름으로 검색" />
        <StyledSection>
          <header>
            <HeaderTitle>내 프로필</HeaderTitle>
          </header>
          <UserList>
            <User key={0} _id={''} userName={userName} />
          </UserList>
        </StyledSection>
        <StyledSection>
          <header>
            <HeaderTitle>친구</HeaderTitle>
          </header>
          <UserList>
            {map(({ _id, userName, imageURL }: UserProps) => (
              <User key={_id} _id={_id} userName={userName} imageURL={imageURL} />
            ))(userList)}
          </UserList>
        </StyledSection>
      </main>
    </Container>
  )
}

export default Users
