import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { REQUEST_SIGNOUT } from '../modules/auth'
import TopHeader from '../components/TopHeader'
import Sidebar from '../components/Sidebar'
import useAuth from '../hooks/useAuth'

import KakaoTalkLogoImage from '../assets/images/kakao-talk.png'

const Container = styled.div`
  nav {
    width: 15%;
  }
  main {
    margin-left: 15%;
  }
`

const KakaoTalkLogoWrapper = styled.div`
  margin: 24px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const KakaoTalkLogo = styled.img`
  max-width: 160px;
  height: auto;
`

const MenuList = styled.ul`
  font-weight: bold;
  li {
    padding: 18px 8px;
    &:hover {
      background-color: #f2f2f2;
      opacity: .9;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Setting: React.FC = () => {
  useAuth()

  const history = useHistory()
  const dispatch = useDispatch()

  const logout = useCallback(() => {
    dispatch({ type: REQUEST_SIGNOUT })

    history.push('/login')
  }, [dispatch, history])

  return (
    <Container>
      <Sidebar />
      <main>
        <TopHeader text='더보기' icon='setting' menuList={ [{ id: 0, menuName: '로그아웃', onClick: logout }] } />
        <KakaoTalkLogoWrapper>
          <KakaoTalkLogo src={ KakaoTalkLogoImage } alt="" />
        </KakaoTalkLogoWrapper>
        <MenuList>
          <li>새소식</li>
          <li>공지사항</li>
          <li>환경설정</li>
          <li>도움말</li>
          <li>카카오톡 정보</li>
        </MenuList>
      </main>
    </Container>
  )
}

export default Setting
