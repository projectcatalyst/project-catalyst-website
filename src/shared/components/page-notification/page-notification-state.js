import { useState } from 'react'

const types = {
  'success': 'success',
  'error': 'error'
}

const usePageNotificationState = () => {
  const [active, setActive] = useState(false)
  const [type, setType] = useState(types.success)
  const [message, setMessage] = useState('')

  const showNotification = (message, type = types.success) => {
    setActive(true)
    setType(type)
    setMessage(message)

    setTimeout(() => {
      setActive(false)
    }, 3000)
  }

  const closeNotification = () =>
    setActive(false)

  return {
    active,
    type,
    message,
    showNotification,
    closeNotification
  }
}

export default usePageNotificationState