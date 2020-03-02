import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

import { Room as RoomProps } from '../modules/room'

import EmptyImage from '../assets/images/kakao-friends.png'

import { Link } from 'react-router-dom'

const Row = styled.li`
  position: relative;
  padding: 4px;
  border-bottom: 1px solid #f7f7f7;
  margin-bottom: 10px;
  &:hover {
    background-color: #f2f2f2;
    opacity: 0.9;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const Col = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 40%;
  margin: 4px;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
  h3 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
  }
  p {
    color: #929292;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Time = styled.small`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #929292;
  font-size: 0.5rem;
`

const Room: React.FC<RoomProps> = ({ _id, title, imageURL, opponent, updatedAt }) => (
  <Row>
    <Link to={`/room/${_id}`}>
      <Col>
        <Avatar src={imageURL || EmptyImage} alt="" />
        <Content>
          <h3>{title}</h3>
        </Content>
      </Col>
      <Col>
        <Time>{format(new Date(updatedAt), 'HH:mm')}</Time>
      </Col>
    </Link>
  </Row>
)

export default Room
