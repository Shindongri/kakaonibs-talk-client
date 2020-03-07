import React, { Fragment } from 'react'
import { Input, Icon, Upload, message } from 'antd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  padding: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
`

const StyledInput = styled(Input)`
  margin-left: 4px;
`

type InputChatProps = {
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  onPressEnter: () => void
  onUpload: (file: File) => void
}

const fileUploadNotification = (status: string) => {
  switch (status) {
    case 'done': {
      message.success('파일이 성공적으로 등록되었습니다.')
      break
    }
    case 'error': {
      message.error('파일 등록에 실패하였습니다.')
      break
    }
    default: {
      break
    }
  }
}

const props = ({ onUpload }: { onUpload: (file: File) => void }) => ({
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      onUpload(info.file.originFileObj)
    }

    fileUploadNotification(info.file.status)
  },
})

export const InputChat: React.FC<InputChatProps> = ({ onInput, onUpload, onPressEnter }) => (
  <Container>
    <Upload {...props({ onUpload })}>
      <Icon type="upload" />
    </Upload>
    <StyledInput
      suffix={
        <Fragment>
          <Icon type="smile" />
          &ensp;
          <Icon type="number" />
        </Fragment>
      }
      onInput={onInput}
      onPressEnter={onPressEnter}
    />
  </Container>
)
