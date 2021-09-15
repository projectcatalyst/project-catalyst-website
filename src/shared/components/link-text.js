import { memo, forwardRef } from 'react'
import styled from 'styled-components'
import { space, layout, color } from 'styled-system'

import containerPropsSeparate from '../functions/container-props-separate'
import Text from './text'

const LinkText = forwardRef(({ href, target = '_blank', children, underline = true, hoverColor, color, ...props }, ref) => {
  const { childProps, containerProps } = containerPropsSeparate(props)
  return (
    <LinkStyled
      ref={ref}
      href={href}
      target={target}
      underline={underline}
      {...containerProps}
    >
      <Text {...childProps} multiLine={false} display='inline' color={color} hoverColor={hoverColor}>
        { children }
      </Text>
    </LinkStyled>
  )
})

const LinkStyled = styled('a')(
  ({ underline, theme }) => ({
    textDecoration: underline ? 'underline' : 'none',
    textDecorationColor: theme.colors.primary,
    color: theme.colors.primary,
    ':hover': {
      cursor: 'pointer'
    },
    ':visited': {
      textDecoration: 'none'
    }
  }),
  space,
  layout,
  color
)

export default memo(LinkText)