import { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../styles/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <title>e.learning</title>
      </Head>

      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
