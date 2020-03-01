import React from 'react'
import styled from 'styled-components'
import { Button, Popover } from 'antd'
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

const StyledButton = styled(Button)`
  border: 0;
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
  onClick?: () => void;
}

const TopHeader: React.FC<TopHeaderProps> = ({ text, count, icon, menuList, onClick }) => {
  return (
    <Container>
      <div>
        <span className="text">{ text }</span>
        <span className="number">{ count }</span>
      </div>
      {
        menuList && menuList.length ? (
          <Popover placement="bottom" trigger="click" content={ (
            <div>
              {
                map(({ id, menuName, onClick }) => (<p key={ id } onClick={ onClick }>{ menuName }</p>))(menuList)
              }
            </div>
          ) }>
            <StyledButton icon={ icon } />
          </Popover>
        ) : <StyledButton icon={ icon } onClick={ onClick } />
      }
    </Container>
  )
}

export default TopHeader
