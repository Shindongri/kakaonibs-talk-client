import React, { useState, useCallback } from 'react'

export const useDrawer = (defaultValue: boolean) => {
  const [visible, setVisible] = useState(defaultValue)

  const showDrawer = useCallback(() => {
    setVisible(true)
  }, [])

  const closeDrawer = useCallback(() => {
    setVisible(false)
  }, [])

  return [visible, showDrawer, closeDrawer] as [typeof visible, typeof showDrawer, typeof closeDrawer]
}
