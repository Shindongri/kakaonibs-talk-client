import React, { useState, useCallback } from 'react'

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue)
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }, [])

  const onReset = useCallback(() => setInput(''), [])

  return [input, onChange, onReset] as [string, typeof onChange, typeof onReset]
}

export default useInput
