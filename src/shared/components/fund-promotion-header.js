import { memo } from 'react'
import styled from 'styled-components'

import { Column, Row } from './box'
import Icon from './font-icon'
import Link from './link'
import Text from './text'

const SHOW_PROMOTION = false

const FundPromotionHeader = () => {
  if (!SHOW_PROMOTION) return null
  return (
    <Container px='20px' py={{ _: '10px', sm: '10px' }} backgroundColor='primary'>
      <Link href='/fund5' target='_blank'>
        <Content>
          <Row width='100%' justifyContent='center' alignItems='center'>
            <Text bold color='white'>
              Check out our fund 5 proposals and support us with your vote!
            </Text>
            <Icon ml='15px' icon='arrow-right' color='white' iconSize='24px' />
          </Row>
        </Content>
      </Link>
    </Container>
  )
}

const Container = styled(Row)({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
})

const Content = styled(Column)({
  width: '100%',
  maxWidth: '1200px',
  minHeight: '20px',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export default memo(FundPromotionHeader)
