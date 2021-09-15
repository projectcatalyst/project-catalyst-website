import { memo } from 'react'

import Link from '../link'
import Icon from './icon'

const iconSizeOptions = {
  small: { iconSize: '20px' },
  medium: { iconSize: '24px' },
  large: { iconSize: '30px' }
}

const IconButton = ({
  href,
  icon,
  color,
  size = 'medium',
  iconSize,
  ...props
}) =>
  <Link
    display='flex'
    justifyContent='center'
    alignItems='center'
    href={href}
    {...props}
  >
    <Icon icon={icon} color={color} iconSize={iconSize || iconSizeOptions[size].iconSize} />
  </Link>

export default memo(IconButton)