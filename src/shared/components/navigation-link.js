import { memo, forwardRef } from 'react'
import NextLink from 'next/link'

import LinkText from './link-text'

const NavigationLink = forwardRef(({ href, children, ...props }, ref) =>
  <NextLink href={href}>
    <LinkText ref={ref} underline={false} color='charcoal' target='_self' {...props}>
      { children }
    </LinkText>
  </NextLink>
)

export default memo(NavigationLink)