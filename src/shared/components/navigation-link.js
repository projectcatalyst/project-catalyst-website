import { memo, forwardRef } from 'react'
import NextLink from 'next/link'

import Link from './link'
import LinkText from './link-text'

const NavigationLink = forwardRef(({ href, children, target, ...props }, ref) => {
  if (target) return (
    <Link href={href} target={target}>
      <LinkText ref={ref} underline={false} color='charcoal' {...props}>
        { children }
      </LinkText>
    </Link>
  )
  return (
    <NextLink href={href}>
      <LinkText ref={ref} underline={false} color='charcoal' {...props}>
        { children }
      </LinkText>
    </NextLink>
  )
})

export default memo(NavigationLink)