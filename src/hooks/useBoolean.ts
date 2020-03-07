import { useState, useCallback } from 'react'

export const useBoolean = (defaultValue: boolean) => {
  const [visible, setVisible] = useState(defaultValue)

  const open = useCallback(() => {
    setVisible(true)
  }, [])

  const close = useCallback(() => {
    setVisible(false)
  }, [])

  return [visible, open, close] as [typeof visible, typeof open, typeof close]
}
