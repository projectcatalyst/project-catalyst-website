import { memo } from 'react'
import NextImage from 'next/image'
import styled from 'styled-components'
import { space, border, position, shadow, layout, color } from 'styled-system'

import Box from './box'
import containerPropsSeparate from '../functions/container-props-separate'

// NOTE - Cannot use styled-system custom width and height e.g. { _: '10px', sm: '20px' }, must be fixed values
const ImageComponent = ({ src, alt, width, height, borderRadius, ...props }) => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  return (
    <Box {...containerProps}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        css={{ borderRadius }}
        {...childProps}
      />
    </Box>
  )
}

const Image = styled(NextImage)(
  space,
  border,
  position,
  shadow,
  layout,
  color
)

export default memo(ImageComponent)