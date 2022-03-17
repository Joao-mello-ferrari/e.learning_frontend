import { Flex, Text, Button, Icon, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import { Navbar } from './navbar'
import { SearchInput } from './input'
import { UserInfo } from './info'

export function Header(){
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  if(isMobile){
    return (
      <Flex w="100vw" maxW="1440" h="14vh" background="brand.primary" align="center" px="8" pb="4" justify="space-between">
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            {/* <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader> */}
            <DrawerBody background="brand.primary" overflowX="hidden" pt="6">
              <UserInfo />
              <Navbar/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Icon as={FiMenu} w={8} h={8} onClick={onOpen} color="brand.white"/>
        <Text color="brand.white" fontWeight="bold" fontSize="3xl">
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
      </Flex>
    )
  }

  return(
    <Flex w="100vw" maxW="1440" h="20vh" background="brand.primary" align="center" px="8" pb="4">
        
        <Text color="brand.white" fontWeight="bold" fontSize="2xl">
          e<Text as="span" color="brand.secondary" mx="0.8">.</Text>learning
        </Text>
        
        <Navbar/>

        <SearchInput/>

        <UserInfo />
        
      </Flex>
  )
}