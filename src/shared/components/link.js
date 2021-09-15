import { memo, forwardRef } from 'react'
import styled from 'styled-components'
import { space, layout, flexbox, border, position, color } from 'styled-system'

const Link = forwardRef(({ href, bold, underline, target, children, ...props }, ref) =>
  <LinkStyled
    ref={ref}
    href={href}
    target={target}
    {...{bold, underline}}
    {...props}
  >
    { children }
  </LinkStyled>
)

const LinkStyled = styled('a')(
  ({ bold, underline }) => ({
    textDecoration: underline ? 'underline' : 'none',
    ... !!bold && { fontWeight: '600' },
    ':hover': {
      cursor: 'pointer'
    },
    ':visited': {
      textDecoration: underline ? 'underline' : 'none'
    }
  }),
  layout,
  space,
  flexbox,
  border,
  position,
  color,
)

export default memo(Link)