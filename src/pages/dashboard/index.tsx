import { useState } from 'react'

import { Box, Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'

import { CourseItem } from '../../components/CourseItem'
import { GetServerSideProps } from 'next'

interface Course{
  imgUrl: string;
  alt: string;
  course: string;
  classes: number;
  slug: string;
  isFavorited: boolean
}

interface HomeProps{
  courses: Course[];
}

export default function Home({ courses }: HomeProps) {
  const [showFavoritedCourses, setShowFavoritedCourses] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box maxW="1440" m="0 auto" >
      <Header catchInputValue={(e: React.ChangeEvent<HTMLInputElement>)=>{setInputValue(e.target.value)}}/>
      <Flex
        flexDir="column"
        background="brand.background"
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
            onChange={e=>{setShowFavoritedCourses(e.target.value==='saved'); setIsEditing(false);}}
          >
            <option className="select-option" value='categories'>Categorias</option>
            <option className="select-option" value='saved'>Salvos</option>
          </Select>
          <Text color="brand.gray" fontSize={["md","lg"]} ml="16" w="80px">
            { courses
              .filter(course=>showFavoritedCourses ? course.isFavorited : true)
              .filter(course=>course.course.toLowerCase().includes(inputValue.toLowerCase()))
              .length 
            } cursos
          </Text>
          { showFavoritedCourses &&
            <Button 
              color="brand.white" 
              background="brand.plight" 
              borderRadius="20" 
              ml="auto"
              w="15%" 
              h="48px"
              fontSize="sm"
              transition="transform 0.3s"
              _hover={{
                background: 'brand.plight',
                transform: 'scale(1.1)',
              }}
            onClick={()=>{setIsEditing(!isEditing)}}
          >
            { isEditing ? 'Parar edição' : 'Editar favoritos' } 
          </Button>

          }
        </Flex>
        
          
        <SimpleGrid
          minChildWidth="240px"
          spacingX="40px"
          spacingY="40px"
          mt="8"
        >
          { courses
            .filter(course=>showFavoritedCourses ? course.isFavorited : true)
            .filter(course=>course.course.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()))
            .map((course,k)=>{
              return(
                <CourseItem 
                  key={k} 
                  imgUrl={course.imgUrl}
                  alt={course.alt} 
                  course={course.course}
                  classes={course.classes} 
                  slug={course.slug}
                  isEditing={isEditing}
                />
              )
            })
          }
        </SimpleGrid>
        
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async() =>{
  const courses = [
    { imgUrl:'/assets/Math.svg', alt:'math', course:'Matemática', classes:16, slug:'/math/1', isFavorited: true},
    { imgUrl:'/assets/Física.svg', alt:'phisics', course:'Física', classes:20, slug:'/phisics/1', isFavorited: false},
    { imgUrl:'/assets/English.svg', alt:'english', course:'Inglês', classes:44, slug:'/english/1', isFavorited: true},
    { imgUrl:'/assets/Quimica.svg', alt:'chemistry', course:'Química', classes:20, slug:'/chemistry/1', isFaisFavoritedvorited: false},
    { imgUrl:'/assets/Talk.svg', alt:'talk', course:'Diálogo em público', classes:18, slug:'/talk/1', isFavorited: false},
    { imgUrl:'/assets/Build.svg', alt:'writing', course:'Redação', classes:54, slug:'writing/1', isFavorited: true}
  ]

  return{
    props:{
      courses
    }
  }
}
