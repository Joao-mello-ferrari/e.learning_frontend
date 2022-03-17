import { Flex, Text, Button, Icon, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'
import { UrlObject } from 'url'
import Link from 'next/link'

interface TopNavigationBarProps{
  backUrl: UrlObject;
  title: String;
}

export function TopNavigationBar({ backUrl, title }:TopNavigationBarProps){

  return(
    <Flex w="100%" 
      maxW="1440" 
      justify={["space-between","start"]} 
      align="center" 
      px={["8","12"]} 
      pb={["8","4"]} 
      mb={["-4","0"]}
      background={["brand.primary","transparent"]}
    >
        <Link href={backUrl}>
          <Icon 
            as={FiArrowLeft}
            color={["brand.white","brand.dgray"]}
            h={[8,6]}
            w={[8,6]}
            mr="4"
            _hover={{
              cursor: 'pointer'
            }}
          />
        </Link>
          
        <Text color={["brand.white","brand.dgray"]} fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        
      </Flex>
  )
}