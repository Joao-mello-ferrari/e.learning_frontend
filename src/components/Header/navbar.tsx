import { Flex } from "@chakra-ui/react";
import { CustomLink } from "../CustomLink";

export function Navbar(){
  return(
    <Flex as="nav" w={["100%","80"]} h={["auto","7vh"]} mx={["0","16"]} flexDir={["column","row"]} mt={["10","0"]}>
      <CustomLink name="Home" url="/"/>          
      <CustomLink name="Blog" url="/blog"/>          
      <CustomLink name="Statistics" url="/statistics"/>
    </Flex>
  )
}