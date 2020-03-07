import React from 'react'
import { Modal, Input, Form } from 'antd'

type RoomCreateModalProps = {
  visible: boolean
  onCancel: () => void
  onInput: (e: React.FormEvent<HTMLInputElement>) => void
  onOk: () => void
}

export const RoomCreateModal: React.FC<RoomCreateModalProps> = ({ visible, onCancel, onInput, onOk }) => (
  <Modal title="채팅방 생성" visible={visible} onCancel={onCancel} okText="생성" cancelText="취소" onOk={onOk}>
    <Form>
      <Form.Item label="방 이름">
        <Input onInput={onInput} />
      </Form.Item>
    </Form>
  </Modal>
)
