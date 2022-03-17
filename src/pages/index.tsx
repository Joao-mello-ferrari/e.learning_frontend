import { Flex, Box, Text, Button, Image } from '@chakra-ui/react'

import { useRouter } from 'next/router';


export default function Home() {
  const { push } = useRouter();

  return (
    <Flex h="100vh" w="100vw" background="brand.primary">
      <Flex flexDir="column" w="50%" justify="center" align="start" pl="16vw">
        <Text color="brand.secondary" fontSize="6xl" lineHeight="1.2">
          Aprenda da melhor forma
        </Text>
        <Text color="brand.white" fontSize="2xl" mt="6">
          Entre na plataforma e
          acesse cursos de diversas áreas
          de conhecimento.
        </Text>
        <Button 
          color="brand.white" 
          background="brand.secondary" 
          borderRadius="20" 
          w="80%" 
          mt="10" 
          h="48px"
          transition="transform 0.3s"
          _hover={{
            background: 'brand.secondary',
            transform: 'scale(1.1)',
          }}
          onClick={()=>{push('/dashboard')}}
        >
          Começar os estudos
        </Button>
      </Flex>
      <Flex 
        backgroundImage="/assets/E.svg" 
        backgroundRepeat="no-repeat" 
        mt="10"
        ml="20"
        w="50%" 
        pl="36"
        justify="start"
        align="center"
      >
          <Image src="/assets/Intro.svg"/>

      </Flex>
    </Flex>
      
    
  )
}

