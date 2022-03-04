import { Box, Flex, Select, SimpleGrid, GridItem, Image } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Header/>
      <Flex
        flexDir="column"
        background="brand.background"
        height="80vh"
        borderTopRadius="20"
        mt={"-3vh"}
        p="10"
      >
        <Select 
          defaultValue="categories" 
          variant="filled" 
          bg="brand.plight" 
          color="brand.dgray" 
          w="200px"
          mb="8"
          _hover={{
            cursor: 'pointer'
          }}
          focusBorderColor="brand.primary"
        >
          <option className="select-option" value='categories'>Categorias</option>
          <option className="select-option" value='saved'>Salvos</option>
        </Select>
          
        <SimpleGrid
          minChildWidth="300"
        >
          <GridItem bg="brand.lgray" h="200" w="200px" borderRadius="10" p="4">
            <Image src="/assets/Math.svg" alt="praia" h={[10,20]}/>
          </GridItem>
        </SimpleGrid>

      </Flex>
    </Box>
  )
}
