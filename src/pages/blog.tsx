import { Button, Flex, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function Blog(){
  const { push } = useRouter();

  return(
    <Flex w="100vw" h="100vh" background="brand.plight" align="center" justify="center">
      <Flex flexDir="column" w="60vw" h="60vh" background="brand.primary" borderRadius="20" align="center" justify="center">
        <Text fontSize="5xl" color="brand.secondary">
           e.learning - Blog
        </Text>
        <Text fontSize="2xl" color="brand.white" mt="8">
          Opps.. Página de blog ainda em desenvolvimento :(
        </Text>
        <Button 
          color="brand.white" 
          background="brand.secondary" 
          borderRadius="20" 
          w="40%" 
          mt="10" 
          h="48px"
          transition="transform 0.3s"
          _hover={{
            background: 'brand.secondary',
            transform: 'scale(1.1)',
          }}
          onClick={()=>{push('/dashboard')}}
        >
          Voltar para dashboard
        </Button>
      </Flex>
    </Flex>
  )
}