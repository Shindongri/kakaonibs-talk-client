import React from 'react'
import styled from 'styled-components'

const Rows = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 7px 0;
`

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

interface FriendProps {
  id?: number;
  imageUrl?: string;
  name: string;
  tag?: string;
  isMe?: boolean;
}

export const FriendItem: React.FC<FriendProps> = ({ imageUrl, name, tag }) => {
  return (
    <Row>
      <Col>
        <img className="avatar" src={ imageUrl } alt="" />
        <span className="name">{ name }</span>
      </Col>
      {
        tag ? (
          <Col>
            <Tag>{ tag }</Tag>
          </Col>
        ) : null
      }
    </Row>
  )
}


export const FriendList: React.FC = ({ children }) => {
  return (
    <Rows>
      { children }
    </Rows>
  )
}
