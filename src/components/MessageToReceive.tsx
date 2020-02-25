import React from 'react'
import styled from 'styled-components'
import EmptyImage from '../assets/images/kakao-friends.png'

const Container = styled.div`
  display: flex;
  margin-right: 7px;
  margin: 0 7px 15px 15px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 40%;
    margin-right: 10px;
  }
  .time {
    font-size: 10px;
    align-self: flex-end;
    color: rgba(0,0,0,0.5);
    padding-bottom: 5px;
  }
`

const Chunk = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 3px;
  }
 .text {
    margin-right: 7px;
    border-radius: 4px;
    background-color: #ffffff;
    padding: 10px 5px;
    font-size: 14px;
  }
`

interface MessageToReceiveProps {
  imageUrl: string;
  name: string;
  msg: string;
  createdAt: string;
}

const MessageToReceive: React.FC<MessageToReceiveProps> = ({ imageUrl, name, msg, createdAt }) => (
  <Container>
    <img src={ imageUrl || EmptyImage } alt="" />
    <Chunk>
      <h3>{ name }</h3>
      <span className="text">{ msg }</span>
    </Chunk>
    <span className="time">{ createdAt }</span>
  </Container>
)

export default MessageToReceive
