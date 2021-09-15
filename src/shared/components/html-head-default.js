import React from 'react'
import Head from 'next/head'

const title = 'Project Catalyst Community'
const description = 'Project Catalyst community site'
const image = 'https://projectcatalyst.org/large-thumbnail.png'
const url = 'projectcatalyst.org'

const HTMLHeadDefault = () =>
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    { /* Facebook */}
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={image} />
    <meta property='og:url' content={url} />
    <meta property='og:site_name' content='Project Catalyst Community' />
    <meta property='og:type' content='website' />
    <meta property='fb:app_id' content='314476629712560' />

    { /* Twitter */ }
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:image:alt' content='Project Catalyst logo' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@serv_network' />

    { /* Favicon */ }
    <meta name='msapplication-TileColor' content='#2b5797' />
    <meta name='theme-color' content='#ffffff' />
    <link rel='icon' href='/favicon.ico' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />

    { /* Fonts */ }
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap'/>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Baloo%20Tamma%202:400' />

    { /* Analytics - Heap */ }
    <script async dangerouslySetInnerHTML={{ __html: `
      (function () {
        window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
        heap.load(${process.env.NEXT_PUBLIC_HEAP_API_KEY});
      })();` }}
    />

    { /* Feedback Tool */ }
    <script async src="https://w.appzi.io/w.js?token=DGPVO" />

  </Head>

export default HTMLHeadDefault
