import React, { forwardRef } from 'react'

import Box from './box-base'

const Column = forwardRef(({ children, ...props }, ref) =>
  <Box
    ref={ref}
    flexDirection='column'
    {...props}
  >
    { children }
  </Box>
)

export default Column