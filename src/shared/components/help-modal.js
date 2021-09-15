import { memo, useState } from 'react'

import Modal from './modal'
import Box from './box'
import Icon from './font-icon'
import { Title } from './text'

const HelpModal = ({ children, title, ...props }) => {
  const [visible, setVisible] = useState(false)

  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  return (
    <Box>
      <Icon onClick={handleOpen} icon='question' iconSize='20px' color='grey70' />
      <Modal
        {...props}
        visible={visible}
        onClose={handleClose}
        title={
          <Title variant='text' mr='20px'>
            { title }
          </Title>
        }
      >
        { children }
      </Modal>
    </Box>
  )
}

export default memo(HelpModal)