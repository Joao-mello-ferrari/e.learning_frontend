import { Flex, Icon, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function SearchInput(){
  return(
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
  )  
}