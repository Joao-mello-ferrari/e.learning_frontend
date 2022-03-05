import { Box, Flex, Select, SimpleGrid, GridItem, Image, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'

import { CustomGridItem } from '../components/GridItem'

export default function Home() {
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Header/>
      <Flex
        flexDir="column"
        background="brand.background"
        // height="80vh"
        borderTopRadius="20"
        mt={"-3vh"}
        p="10"
      >
        <Flex w="100%" align="top">
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
          <Text color="brand.gray" fontSize={["md","lg"]} ml="16" w="80px">63 cursos</Text>
        </Flex>
        
          
        <SimpleGrid
          minChildWidth="240px"
          spacingX="40px"
          spacingY="40px"
        >
          <CustomGridItem imgUrl='/assets/Math.svg' alt='math' course='Matemática' classes={16}/>
          <CustomGridItem imgUrl='/assets/Física.svg' alt='phisics' course='Física' classes={20}/>
          <CustomGridItem imgUrl='/assets/English.svg' alt='english' course='Inglês' classes={44}/>
          <CustomGridItem imgUrl='/assets/Quimica.svg' alt='chemistry' course='Química' classes={20}/>
          <CustomGridItem imgUrl='/assets/Talk.svg' alt='talk' course='Diálogo em público' classes={18}/>
          <CustomGridItem imgUrl='/assets/Build.svg' alt='writing' course='Redação' classes={54}/>
        </SimpleGrid>

      </Flex>
    </Box>
  )
}
