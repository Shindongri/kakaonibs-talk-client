import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

import { REQUEST_SIGNIN } from '../modules/auth'

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

  const onInput = useCallback(e => {
    setUserName(e.target.value)
  }, [])

  const login = useCallback(() => {
    dispatch({ type: REQUEST_SIGNIN, payload: { userName, uuid: uuid() } })

    history.push('/users')
  }, [userName, dispatch, history])

  return (
    <Container>
      <Logo src={ LogoImage } alt="" />
      <LoginContainer>
        <StyledInput placeholder="아이디를 입력해주세요." onInput={ onInput } onPressEnter={ login } />
        <Button onClick={ login }>로그인</Button>
      </LoginContainer>
    </Container>
  )
}

export default Login
