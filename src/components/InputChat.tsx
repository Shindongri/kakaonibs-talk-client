import React, { Fragment } from 'react'
import { Input, Icon } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #EEEEEE;
  padding: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
`

const StyledInput = styled(Input)`
  margin-left: 4px;
`

const InputChat: React.FC = () => {
  return (
    <Container>
      <Icon type="plus-square" />
      <StyledInput suffix={
        <Fragment>
          <Icon type="smile" />&ensp;
          <Icon type="number" />
        </Fragment>
      } />
    </Container>
  )
}

export default InputChat
