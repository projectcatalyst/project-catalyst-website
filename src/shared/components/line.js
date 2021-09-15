import { memo } from 'react'

import Box from './box'

const Line = ({ width = '100%', height = '2px', color = 'primary', ...props }) => 
  <Box
    width={width}
    height={height}
    backgroundColor={color}
    {...props}
  />

export default memo(Line)