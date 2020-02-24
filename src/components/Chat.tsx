import React from 'react'
import styled from 'styled-components'

const Rows = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 7px 0;
`

const Row = styled.li`
  position: relative;
  padding: 4px;
  margin-bottom: 10px;
  border-bottom: 1px solid #F7F7F7;
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

export interface ChatProps {
  imageUrl?: string;
  name: string;
  latestMessage: string;
  updatedAt: string;
}

export const ChatItem: React.FC<ChatProps> = ({ imageUrl, name, latestMessage, updatedAt }) => (
  <Row>
    <Col>
      <Avatar src={ imageUrl } alt="" />
      <Content>
        <h3 className='name'>{ name }</h3>
        <p className='message'>{ latestMessage }</p>
      </Content>
    </Col>
    <Col>
      <Time>{ updatedAt }</Time>
    </Col>
  </Row>
)


export const ChatList: React.FC = ({ children }) => (
  <Rows>
    { children }
  </Rows>
)
