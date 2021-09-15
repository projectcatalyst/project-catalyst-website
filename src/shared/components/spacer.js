import { memo } from 'react'

import Box from './box'

const Spacer = ({ height }) =>
  <Box height={height} width='inherit' />

export default memo(Spacer)