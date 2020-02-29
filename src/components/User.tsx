import React from 'react'
import styled from 'styled-components'

import { User as UserProps } from '../modules/user'
import EmptyImage from '../assets/images/kakao-friends.png'

const Row = styled.li`
  margin-bottom: 10px;
  &:hover {
    background-color: #f2f2f2;
    opacity: .9;
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

const Tag = styled.span``

const User: React.FC<UserProps> = ({ id, imageUrl, name, tag }) => {
  return (
    <Row>
      <Col>
        <img className="avatar" src={ imageUrl || EmptyImage } alt="" />
        <span className="name">{ name }</span>
      </Col>
      {
        tag && (
          <Col>
            <Tag>{ tag }</Tag>
          </Col>
        )
      }
    </Row>
  )
}

export default User
