// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../theme/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <link href="https://api.fontshare.com/css?f[]=clash-display@200,300,400,500,600&f[]=melodrama@300,400,500,600,700&f[]=aktura@400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet"/>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}