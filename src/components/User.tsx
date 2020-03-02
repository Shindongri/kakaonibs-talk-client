import React from 'react'
import styled from 'styled-components'

import { User as UserProps } from '../modules/user'
import EmptyImage from '../assets/images/kakao-friends.png'

const Row = styled.li`
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
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 40%;
    margin: 4px;
  }
  .name {
    margin-left: 8px;
    font-weight: 600;
    font-size: 1rem;
  }
`

const User: React.FC<UserProps> = ({ _id, imageURL, userName }) => {
  return (
    <Row>
      <Col>
        <img className="avatar" src={imageURL || EmptyImage} alt="" />
        <span className="name">{userName}</span>
      </Col>
    </Row>
  )
}

export default User
