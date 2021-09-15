import { memo } from 'react'
import Head from 'next/head'

// NOTE - Default head tags in pages/html-head.js
const HTMLHead = ({ children, title, description }) =>
  <Head>
    <title>{ title || 'Project Catalyst Community' }</title>
    { !!description && <meta name='description' content={description} /> }
    { children }
  </Head>

export default memo(HTMLHead)