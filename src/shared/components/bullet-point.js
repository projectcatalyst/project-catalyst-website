import React, { memo } from 'react'

import Box, { Row } from './box'
import Text from './text'

const BulletPoint = ({ children, ...props }) => 
  <Row mt='16px' {...props}>
    <Box width='10px' height='10px' backgroundColor='primary' borderRadius='5px' mr='10px' mt='6px' />
    <Text flex='1' lineHeight={{ _: '19px', md: '23px' }}>{ children }</Text>
  </Row>

export default memo(BulletPoint)