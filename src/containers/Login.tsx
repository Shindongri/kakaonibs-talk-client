import React from 'react'
import styled from 'styled-components'
import { Input, Button } from 'antd'

import { useInput, useLogin } from '../hooks'

import LogoImage from '../assets/images/kakao-talk-color.svg'

const Container = styled.div`
  background-color: #ffe713;
  width: 100%;
  height: 100vh;
`

const Logo = styled.img`
  max-width: 375px;
  opacity: 0.9;
  padding: 128px 128px 64px 128px;
  display: flex;
  margin: auto;
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
  const [userName, setUserName] = useInput(null)
  const handleLogin = useLogin(userName)

  return (
    <Container>
      <Logo src={LogoImage} alt="" />
      <LoginContainer>
        <StyledInput placeholder="아이디를 입력해주세요." onInput={setUserName} onPressEnter={handleLogin} />
        <Button onClick={handleLogin}>로그인</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login
