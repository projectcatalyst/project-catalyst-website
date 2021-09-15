import Router from 'next/router'

import { isServer } from '../constants'

const routeRedirect = (ctx, route) => {
  // NOTE Only redirect if the new route is different to the current
  if (route !== ctx.pathname) 
    !isServer
      ? Router.push(route || '/')
      : ctx.res.writeHead(302, { Location: route || '/' }).end()
}

export default routeRedirect