import { Button, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { FiArrowLeft } from 'react-icons/fi'

interface NavigationButtonProps{
  isNext?: boolean;
  isActive: boolean;
  urlToPushTo: string;
}

export function NavigationButton({ isNext=false, isActive, urlToPushTo }:NavigationButtonProps){
  const { push } = useRouter();
  
  if(isNext){
    return(
      <Button
        disabled={!isActive}
        w={["36","40"]}
        h="12"
        padding="4"
        borderRadius="40"
        background="brand.secondary"
        transition="background 0.2s"
        ml={["4","12"]}
        _hover={{
          background: 'brand.slight'
        }}
        _disabled={{
          background: 'brand.slight',
          cursor: 'not-allowed'
        }}
        onClick={()=>{push(urlToPushTo)}}
      >
        <Icon 
          as={FiArrowLeft}
          color="brand.white"
          mr="2"
        />
        <Text color="brand.white">
          Próxima aula
        </Text>
      </Button>
    )
  }
  
  return(
    <Button
      disabled={!isActive}
      w={["36","40"]}
      h="12"
      padding="4"
      borderRadius="40"
      transition="background 0.2s"
      background="brand.background"
      _hover={{
        background: 'brand.white'
      }}
      _disabled={{
        opacity:0.6,
        background: 'brand.white',
        cursor: 'not-allowed'
      }}
      onClick={()=>{push(urlToPushTo)}}
    >
      <Icon 
        as={FiArrowLeft}
        color="brand.secondary"
        mr="2"
      />
      <Text color="brand.secondary">
        Aula anterior
      </Text>
    </Button>
  )
}