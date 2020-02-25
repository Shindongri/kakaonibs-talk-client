import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'

import LogoImage from '../assets/images/kakao-talk-color.svg'

const Container = styled.div`
  background-color: #ffe713;
  width: 100%;
  height: 100vh;
  position: relative;
`

const Logo = styled.img`
  width: 100%;
  opacity: .9;
  padding: 128px 128px 64px 128px;
`

const LoginContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`

const StyledInput = styled(Input)`
  margin-bottom: 8px;
`

const Login: React.FC = () => {
  return (
    <Container>
      <Logo src={ LogoImage } alt="" />
      <LoginContainer>
        <StyledInput placeholder="아이디를 입력해주세요." />
        <Button>로그인</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login
