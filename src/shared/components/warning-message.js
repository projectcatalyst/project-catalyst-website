import { memo } from 'react'
import styled from 'styled-components'

import { Row } from './box'
import Text from './text'
import Icon from './font-icon'

const WarningMessage = ({ children, ...props }) =>
  <Container {...props}>
    <Icon mt='3px' icon='important' iconSize='24px' color='orange' />
    <Text ml='10px'>
      { children }
    </Text>
  </Container>

const Container = styled(Row)(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    border: `1px solid ${theme.colors.orange}`,
    borderRadius: '10px',
    padding: '10px 15px 10px 15px'
  })
)

export default memo(WarningMessage)