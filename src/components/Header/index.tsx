import { Flex, Text, Button, Icon, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { useRouter } from 'next/router'

import { Navbar } from './navbar'
import { SearchInput } from './input'
import { UserInfo } from './info'
import { Interface } from 'readline'

interface HeaderProps{
  catchInputValue?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export function Header({ catchInputValue }:HeaderProps){
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { push } = useRouter();

  if(isMobile){
    return (
      <Flex w="100vw" maxW="1440" h="14vh" background="brand.primary" align="center" px="8" pb="4" justify="space-between">
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody background="brand.primary" /*overflowX="hidden"*/ pt="6">
              <UserInfo />
              <Navbar/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Icon as={FiMenu} w={8} h={8} onClick={onOpen} color="brand.white"/>
        <Text color="brand.white" fontWeight="bold" fontSize="3xl" onClick={()=>{push('/')}}>
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
      </Flex>
    )
  }

  return(
    <Flex w="100vw" maxW="1440" h="20vh" background="brand.primary" align="center" px="8" pb="4">
        
        <Text 
          color="brand.white" 
          fontWeight="bold" 
          fontSize="2xl" 
          _hover={{cursor: 'pointer'}}
          onClick={()=>{push('/')}}
        >
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
        
        <Navbar/>

        <SearchInput onInputChange={catchInputValue}/>

        <UserInfo />
        
      </Flex>
  )
}