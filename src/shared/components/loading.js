import { memo } from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

import Loading from '../svg/loading-spinner.svg'
import Box from './box'
import containerPropsSeparate from '../functions/container-props-separate'

const LoadingComponent = props => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  const { size, color } = childProps
  return (
    <Box {...containerProps}>
      <LoadingIcon {...{size, color}} />
    </Box>
  )
}

const LoadingIcon = styled(Loading)(
  ({ theme, size, color }) => ({
    width: size || '30px',
    height: size || '30px',
    '*': {
      stroke: `${theme.colors[color || 'primary']} !important`
    }
  }),
  space,
  layout
)

export default memo(LoadingComponent)