import { memo, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

import Box, { Row } from './box'
import { IconButton } from './font-icon'

const Modal = ({ visible = true, children, title, onClose, ...props }) => {
  const node = useRef()
  const parentNode = useRef()

  const handleClickOutside = event => {
    event.stopPropagation()
    if (node && node.current && !node.current.contains(event.target) && onClose) onClose()
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)
    return () =>
      document.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  if (!visible) return null
  return (
    <Container ref={parentNode}>
      <Content ref={node} {...props}>
        { !!onClose && 
          <Row 
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            pt={{ _: '5px', sm: '10px' }}
            px={{ _: '10px', sm: '15px' }}
          >
            <Row>
              { !!title && title }
            </Row>
            <IconButton
              onClick={onClose}
              icon='close'
              color='grey50'
              iconSize='30px'
            />
          </Row>
        }
        { children }
      </Content>
    </Container>
  )
}

const Container = styled(Box)({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  ':hover': {
    cursor: 'auto'
  } 
})

const Content = styled(Box)(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    boxShadow: `0px 0px 6px 2px ${theme.colors.grey30}`,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    height: 'auto'
  }),
  space,
  layout
)

export default memo(Modal)