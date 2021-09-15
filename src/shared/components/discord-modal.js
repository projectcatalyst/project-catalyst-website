import { memo, useState } from 'react'
import styled from 'styled-components'

import Modal from './modal'
import Box, { Column, Row } from './box'
import Icon from './font-icon'
import Button from './button'
import Text, { Title } from './text'

const DiscordModal = ({ username, text, onClose }) => {
  const [showCopied, setShowCopied] = useState()

  const handleClipboardCopy = event => {
    event.stopPropagation()
    navigator.clipboard.writeText(username)
    setShowCopied(true)
    setTimeout(() => setShowCopied(false), 900)
  }

  return (
    <Modal
      onClose={onClose}
      title={
        <Row alignItems='center'>
          <Icon icon='discord' iconSize='20px' color='primary' />
          <Title variant='text' ml='8px'>
            Discord
          </Title>      
        </Row>
      }
    >
      <Column p={{ _: '10px', sm: '15px' }} maxWidth='400px' mt='20px' justifyContent='center' alignItems='center'>
        <Row flexWrap='wrap' alignItems='center' justifyContent='center'>
          <DiscordUsername my='5px' mx='5px'>
            <Text ellipsis maxWidth={{ _: '230px', sm: '300px' }}>
              { username }
            </Text>
          </DiscordUsername>
          <Button minWidth='90px' my='5px' mx='5px' onClick={handleClipboardCopy}>
            { showCopied ? 'Copied' : 'Copy' }
          </Button>
        </Row>
        <Text mt='10px'>
          { text || 'Add their username on Discord' }
        </Text>
      </Column>
    </Modal>
  )
}

const DiscordUsername = styled(Box)(
  ({ theme }) => ({
    borderWidth: '1px',
    borderColor: theme.colors.grey30,
    borderRadius: '5px',
    borderStyle: 'solid',
    padding: '6px 12px 6px 12px',
    justifyContent: 'center'
  })
)

export default memo(DiscordModal)