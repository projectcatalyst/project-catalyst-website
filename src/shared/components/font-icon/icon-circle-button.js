import { memo } from 'react'

import Link from '../link'
import Icon from './icon'

const sizeOptions = {
  small: {
    width: '34px',
    height: '34px',
    borderRadius: '17px'
  },
  medium: {
    width: '40px',
    height: '40px',
    borderRadius: '20px'
  },
  large: {
    width: '50px',
    height: '50px',
    borderRadius: '25px'
  }
}

const iconSizeOptions = {
  small: { iconSize: '20px' },
  medium: { iconSize: '24px' },
  large: { iconSize: '30px' }
}

// NOTE - This is due to the font-awesome icons
const iconPadding = {
  discord: {
    'paddingRight': '1px'
  },
  telegram: {
    'paddingRight': '3px'
  }
}

const IconCircleButton = ({
  href,
  icon,
  color,
  size = 'medium',
  iconSize, 
  width,
  height,
  borderRadius,
  backgroundColor = 'grey30',
  ...props
}) =>
  <Link
    display='flex'
    justifyContent='center'
    alignItems='center'
    { ...sizeOptions[size] }
    { ... !!iconPadding[icon] && iconPadding[icon] }
    backgroundColor={backgroundColor}
    {...props}
  >
    <Icon icon={icon} color={color} iconSize={iconSize || iconSizeOptions[size].iconSize} />
  </Link>

export default memo(IconCircleButton)