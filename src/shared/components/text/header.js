import React, { memo } from 'react'

import Text from './text-base'

const Header = ({ children, variant, ...props }) =>
  <Text
    variant={variantOptions[variant] || 'header'}
    multiLine={false}
    {...props}
  >
    { children }
  </Text>

const variantOptions = {
  large: 'headerLarge',
  medium: 'header',
  small: 'headerSmall'
}

Header.defaultProps = {
  type: 'medium'
}

export default memo(Header)