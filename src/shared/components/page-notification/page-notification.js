import { memo } from 'react'
import styled from 'styled-components'

import Box from '../box'
import Text from '../text'
import Icon from '../font-icon'

const PageNotification = ({ active, message, type = 'success', closeNotification }) =>
  <Container active={active} type={type} onClick={closeNotification}>
    <Content>
      <Box width='40px' />
      <Text variant='textLarge' color='white'>
        { message }
      </Text>
      <Box width='40px'> 
        <Icon size='sm' icon='close' color='white' />
      </Box>
    </Content>
  </Container>

const Container = styled(Box)(({ theme, type, active }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '60px',
  top: 0,
  left: 0,
  position: 'fixed',
  ':hover': {
    cursor: 'pointer'
  },
  backgroundColor: theme.colors.primary,
  ... type === 'success' && { backgroundColor: theme.colors.primary },
  ... type === 'error' && { backgroundColor: theme.colors.red50 },
  top: -60,
  transition: 'top 1s',
  zIndex: 1,
  ... !!active && { top: 0 }
}))

const Content = styled(Box)({
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
  width: '100%',
  justifyContent: 'space-between'
})

export default memo(PageNotification)