import { Box, Flex, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Flex w="100vw" h="10vh" background="brand.primary" align="center" px="8">
        <Text color="brand.white" fontWeight="bold" fontSize="2xl">
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
        <Flex as="nav" w="100vw" h="10vh">
          <NextLink href='/' passHref>
            <Link>Dashboard</Link>
          </NextLink>
          <NextLink href='/courses' passHref>
            <Link>Courses</Link>
          </NextLink>
          <NextLink href='/statistics' passHref>
            <Link>Statistics</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  )
}
