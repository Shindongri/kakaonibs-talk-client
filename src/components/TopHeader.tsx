import React from 'react'
import styled from 'styled-components'
import { Icon, Dropdown, Menu as AntMenu } from 'antd'
import { map } from 'lodash/fp'

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

type Menu = {
  id: number;
  menuName: string;
  onClick?: () => void;
}

interface TopHeaderProps {
  text: TopHeaderText;
  count?: number;
  icon?: string;
  menuList?: Menu[];
}

const TopHeader: React.FC<TopHeaderProps> = ({ text, count, icon, menuList }) => {
  return (
    <Container>
      <div>
        <span className="text">{ text }</span>
        <span className="number">{ count }</span>
      </div>
      <Dropdown overlay={
        <AntMenu>
          {
            map(({ id, menuName, onClick }) => (
              <AntMenu.Item key={ id } onClick={ onClick }>{ menuName }</AntMenu.Item>
            ))(menuList)
          }
        </AntMenu> }>
        <Icon type={ icon } />
      </Dropdown>
    </Container>
  )
}

export default TopHeader
