import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { layout, space, color, flexbox, shadow, border, position } from 'styled-system'

const Box = forwardRef(({ children, ...props }, ref) => 
  <BoxBase ref={ref} {...props}>
    { children }
  </BoxBase>
)

const BoxBase = styled('div')(
  {
    display: 'flex'
  },
  layout,
  space,
  flexbox,
  shadow,
  border,
  position,
  color,
)

export default Box