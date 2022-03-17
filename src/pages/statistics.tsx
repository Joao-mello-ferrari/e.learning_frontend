import { Button, Flex, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function Statistics(){
  const { push } = useRouter();

  return(
    <Flex w="100vw" h="100vh" background="brand.plight" align="center" justify="center">
      <Flex 
        flexDir="column" 
        w={["100vw","60vw"]} 
        h={["100vh","60vh"]} 
        background="brand.primary" 
        borderRadius={["0","20"]} 
        align="center" 
        justify="center"
      >
        <Text fontSize="5xl" color="brand.secondary" textAlign="center">
           e.learning - Statistics
        </Text>
        <Text fontSize="xl" color="brand.white" mt="8" textAlign="center">
          Opps.. Página de estatísticas ainda em desenvolvimento :(
        </Text>
        <Button 
          color="brand.white" 
          background="brand.secondary" 
          borderRadius="20" 
          w="80%" 
          mt="10" 
          h="64px"
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