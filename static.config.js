import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'
import axios from 'axios'

const REACT_STATIC_PATHS = {
  src: 'src',
  dist: 'dist',
  devDist: 'dist',
  public: 'public',
}

export default {
  siteRoot: '',
  basePath: '',
  getRoutes: () => [
    {
      path: '/',
      component: 'src/pages/index',
      getData: () => ({ title: '' }),
    }
  ],
  paths: REACT_STATIC_PATHS,
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      "react-static-plugin-mdx",
      {
        includePaths: ['/src', '/src/pages'],
        extensions: ['.mdx']
      }
    ],
    'react-static-plugin-css-modules',
    'react-static-plugin-styled-components',
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  beforeRenderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHTML extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;
      return (
      <Html>
        <Head>
        <meta charSet="UTF-8"/>
          <style>
            @import url(https://fonts.googleapis.com/css?family=Permanent+Marker);
            @import url(https://fonts.googleapis.com/css?family=IBM+Plex+Mono);
            @import url(https://fonts.googleapis.com/css?family=Roboto+Mono);
            @import url(https://fonts.googleapis.com/css?family=Share+Tech+Mono);
          </style>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MXJXN is Max Jackson -- Developer, artist and musician.</title>
        </Head>
        <Body>
          {children}
        </Body>
      </Html>
      )
    }
  }
}
