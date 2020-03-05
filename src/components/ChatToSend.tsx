import React from 'react'
import styled from 'styled-components'
import { dateConverter } from '../utils/date'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 15px 15px 7px;
  .time {
    font-size: 10px;
    align-self: flex-end;
    color: rgba(0, 0, 0, 0.5);
    padding-bottom: 5px;
  }
  .text {
    max-width: 50%;
    margin-left: 7px;
    border-radius: 4px;
    background-color: #ffe934;
    padding: 10px 5px;
    font-size: 14px;
    over-flow: hidden;
  }
  .image {
    max-width: 50%;
    margin-left: 7px;
    border-radius: 4px;
    padding: 10px 5px;
  }
`

interface MessageToSendProps {
  _id: string
  createdAt: Date
  chat?: string
  image?: string
}

const ChatToSend: React.FC<MessageToSendProps> = ({ createdAt, chat, image }) => (
  <Container>
    <span className="time">{dateConverter(createdAt, 'HH:mm')}</span>
    {image ? (
      <img className="image" src={`${process.env.REACT_APP_API_HOST}/image/${image}`} alt="" />
    ) : (
      <span className="text">{chat}</span>
    )}
  </Container>
)

export default ChatToSend
