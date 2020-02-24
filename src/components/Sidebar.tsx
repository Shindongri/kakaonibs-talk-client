import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'

const Container = styled.nav`
  background-color: #523636;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  text-align: center;
`

const StyledIcon = styled(Icon)`
  padding: 12px;
  font-size: 1.4em;
  color: #ffffff;
`

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Link to="/friends">
        <StyledIcon type="user" />
      </Link>
      <Link to="/chats">
        <StyledIcon type="message" />
      </Link>
      <Link to="/setting">
        <StyledIcon type="ellipsis" />
      </Link>
    </Container>
  )
}

export default Sidebar
