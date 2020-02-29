import React from 'react'
import { Icon } from 'antd'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Container = styled.header`
  padding: 16px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  h3 {
    font-size: 17px
  }
`

interface ChatDetailHeaderProps {
  name: string;
  showDrawer: () => void;
}

const RoomDetailHeader: React.FC<ChatDetailHeaderProps> = ({ name, showDrawer }) => {
  const history = useHistory()

  return (
    <Container>
      <Icon type="left" onClick={ () => history.goBack() } />
      <h3>{ name }</h3>
      <Icon type="menu" onClick={ showDrawer } />
    </Container>
  )
}

export default RoomDetailHeader
