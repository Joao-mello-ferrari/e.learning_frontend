import { Box, Flex, Text, Input, Icon, Avatar } from '@chakra-ui/react'
import { FiSearch } from "react-icons/fi";
import NextLink from 'next/link'

import { CustomLink } from './components/CustomLink'

export default function Home() {
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Flex w="100vw" h="20vh" background="brand.primary" align="center" px="8" pb="6">
        <Text color="brand.white" fontWeight="bold" fontSize="2xl">
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
        <Flex as="nav" w="80" h="7vh" mx="16">
          <CustomLink name="Home" url="/"/>          
          <CustomLink name="Courses" url="/courses"/>          
          <CustomLink name="Statistics" url="/statistics"/>
        </Flex>
        
        <Flex 
          as="label" 
          w="80" 
          background="brand.white"
          borderRadius="28" 
          px="5"
          py="3"
          alignItems="center"
        >
          <Icon as={FiSearch} w={5} h={5} color="brand.gray"/>
          <Input
            variant="unstyled"
            paddingLeft="4"
            color='brand.gray'
            fontSize="lg"
          />
        </Flex>

        <Flex 
          flex={1}
          justify="flex-end"
          align="center"
        >
          <Flex flexDir="column" align="flex-end" mr="4">
            <Text color="brand.white" fontSize="lg">João Mello</Text>
            <Text color="brand.white" fontSize="lg">joao.vico.mellof@gmail.com</Text>
          </Flex>
          <Avatar src="https://avatars.githubusercontent.com/u/67838782" name="joao" color="brand.secondary" background="brand.white" border="2px"/>
        </Flex>
      </Flex>
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
