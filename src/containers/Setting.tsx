import React from 'react'
import styled from 'styled-components'

import TopHeader from '../components/TopHeader'
import KakaoTalkLogoImage from '../assets/images/kakao-talk.png'

const KakaoTalkLogoWrapper = styled.div`
  margin: 24px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const KakaoTalkLogo = styled.img`
  width: 50%;
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

const Setting: React.FC = () => (
  <main>
    <TopHeader text='더보기' icon='setting' />
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
)

export default Setting
