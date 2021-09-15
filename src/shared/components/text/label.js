import React, { memo } from 'react'

import Text from './text-base'

const Label = ({ children, ...props }) =>
  <Text
    variant='label'
    multiLine={false}    
    {...props}
  >
    { children }
  </Text>

export default memo(Label)