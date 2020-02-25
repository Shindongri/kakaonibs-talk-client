import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 15px 15px 7px;
  .time {
    font-size: 10px;
    align-self: flex-end;
    color: rgba(0,0,0,0.5);
    padding-bottom: 5px;
  }
  .text {
      max-width: 50%;
    margin-left: 7px;
    border-radius: 4px;
    background-color: #FFE934;
    padding: 10px 5px;
    font-size: 14px;
  }
`

interface MessageToSendProps {
  createdAt: string;
  msg: string;
}

const MessageToSend: React.FC<MessageToSendProps> = ({ createdAt, msg }) => (
  <Container>
    <span className="time">{ createdAt }</span>
    <span className="text">{ msg }</span>
  </Container>
)

export default MessageToSend
