import React, { memo } from 'react'

import Text from './text-base'

const Title = ({ children, ...props }) =>
  <Text
    variant='title'
    multiLine={false}
    bold
    {...props}
  >
    { children }
  </Text>

export default memo(Title)