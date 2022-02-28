import { Flex, Text, Avatar } from "@chakra-ui/react";

export function UserInfo(){
  return(
    <Flex 
      flex="1"
      justify={["center","flex-end"]}
      align="center"
    >
      <Flex flexDir="column" align={["flex-start","flex-end"]} mr={["2","4"]}>
        <Text color="brand.white" fontSize={["md","lg"]}>João Mello</Text>
        <Text color="brand.white" fontSize={["md","lg"]}>joao.vico.mellof@gmail.com</Text>
      </Flex>
      <Avatar src="https://avatars.githubusercontent.com/u/67838782" name="joao" color="brand.secondary" background="brand.white" border="2px"/>
    </Flex>
  )
}