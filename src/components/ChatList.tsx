import React from 'react'
import styled from 'styled-components'

const Rows = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 7px 0;
`

const ChatList: React.FC = ({ children }) => (
  <Rows>
    { children }
  </Rows>
)

export default ChatList
