import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 8px;
  .text {
    font-weight: bold;
  }
  .number {
    margin-left: 2px;
    color: #9b9b9b;
  }
`

type TopHeaderText = '친구' | '채팅' | '더보기'

interface TopHeaderProps {
  text: TopHeaderText;
  count?: number;
  icon?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ text, count, icon }) => {
  return (
    <Container>
      <div>
        <span className="text">{ text }</span>
        <span className="number">{ count }</span>
      </div>
      <Icon type={ icon } />
    </Container>
  )
}

export default TopHeader
