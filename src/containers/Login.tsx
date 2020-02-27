import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { SET_USER_NAME, SET_IS_LOGGED } from '../modules/user'

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
  const [userName, setUserName] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleInput = useCallback(e => {
    setUserName(e.target.value)
  }, [])

  const login = useCallback(() => {
    dispatch({ type: SET_USER_NAME, payload: userName })
    dispatch({ type: SET_IS_LOGGED, payload: true })
    history.push('/users')
  }, [userName])

  return (
    <Container>
      <Logo src={ LogoImage } alt="" />
      <LoginContainer>
        <StyledInput placeholder="아이디를 입력해주세요." onInput={ handleInput } onPressEnter={ login } />
        <Button onClick={ login }>로그인</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login
