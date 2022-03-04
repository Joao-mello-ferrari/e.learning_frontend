import { Box, Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Header/>
      <Flex
        background="brand.background"
        height="80vh"
        borderTopRadius="20"
        mt="-3vh"
      >
        
      </Flex>
    </Box>
  )
}
