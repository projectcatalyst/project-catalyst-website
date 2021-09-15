import React, { forwardRef } from 'react'

import Box from './box-base'

const Row = forwardRef(({ children, ...props }, ref) =>
  <Box
    ref={ref}
    flexDirection='row'
    {...props}
  >
    { children }
  </Box>
)

export default Row