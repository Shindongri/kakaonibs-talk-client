import React from 'react'
import { Input, Icon } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #f7f7f7;
  border-radius: 4px;
`

const StyledIcon = styled(Icon)`
  color: #a7a7a7;
  padding: 16px;
`

const StyledInput = styled(Input)`
  padding: 8px;
  margin: 0 8px;
`

type InputSearch = {
  placeholder?: string
}

const InputSearch: React.FC<InputSearch> = ({ placeholder }) => {
  return (
    <Container>
      <StyledIcon type="search" />
      <StyledInput placeholder={placeholder} />
    </Container>
  )
}

export default InputSearch
