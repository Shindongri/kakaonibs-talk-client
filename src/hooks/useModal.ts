import { Modal } from 'antd'
import { useCallback } from 'react'

const { confirm } = Modal

type OkType = 'link' | 'default' | 'dashed' | 'primary' | 'ghost' | 'danger'
type ModalProps = {
  title: string | null
  okText?: string
  okType?: OkType
  cancelText?: string
  onOk: () => void
  onCancel?: () => void
}

export const useModal = ({
  title,
  okText = '확인',
  okType = 'default',
  cancelText = '취소',
  onOk,
  onCancel,
}: ModalProps) =>
  useCallback(
    () =>
      confirm({
        title,
        okText,
        okType,
        cancelText,
        onOk,
        onCancel,
      }),
    [title, okText, okType, cancelText, onOk, onCancel],
  )
