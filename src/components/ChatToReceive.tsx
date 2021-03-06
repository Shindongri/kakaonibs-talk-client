import React from 'react'
import styled from 'styled-components'

import { dateConverter } from '../utils/date'
import { imageUrl } from '../utils/image'
import EmptyImage from '../assets/images/kakao-friends.png'

const Container = styled.div`
  display: flex;
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
    color: rgba(0, 0, 0, 0.5);
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
  .image {
    max-width: 50%;
    margin-right: 7px;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 10px 5px;
  }
`

interface MessageToReceiveProps {
  _id: string
  thumbnailImage?: string
  name: string | null
  chat?: string
  image?: string
  createdAt: Date
}

export const ChatToReceive: React.FC<MessageToReceiveProps> = ({ thumbnailImage, name, chat, image, createdAt }) => (
  <Container>
    <img src={thumbnailImage || EmptyImage} alt="" />
    <Chunk>
      <h3>{name}</h3>
      {image ? <img className="image" src={imageUrl(image)} alt="" /> : <span className="text">{chat}</span>}
    </Chunk>
    <span className="time">{dateConverter(createdAt, 'HH:mm')}</span>
  </Container>
)
