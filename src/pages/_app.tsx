import { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { customTheme } from '../styles/theme'

import { FavoritedCoursesProvider } from '../context/favoritedCourses'

import '../styles/globals.css'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <title>e.learning</title>
      </Head>

      <FavoritedCoursesProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </FavoritedCoursesProvider>
    </>
  )
}

export default MyApp
