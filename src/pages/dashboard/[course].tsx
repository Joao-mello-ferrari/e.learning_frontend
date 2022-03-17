import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next"
import { Header } from "../../components/Header";

import { ClassItem } from '../../components/ClassItem'

interface Class{
  id: number;
  title: number;
  number: number;
  duration: number;
}

interface CourseProps{
  course: string;
  classes: Class[];
}

export default function Course({ course, classes }: CourseProps){

  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Header/>
      <Flex
        flexDir="column"
        background="brand.background"
        // height="80vh"
        borderTopRadius="20"
        mt={"-3vh"}
        p={["6","10"]}
      >
        <SimpleGrid
          minChildWidth="400px"
          spacingX="40px"
          spacingY="40px"
          mt="8"
          // pr={["20","0"]}
        >
          { classes
            .map((courseClass)=>{
              return(
                <ClassItem 
                  key={courseClass.id} 
                  id={courseClass.id}
                  duration={courseClass.duration}
                  number={courseClass.number}
                  title={courseClass.title}
                  slug={`/dashboard/${course}/${courseClass.id}`}
                />
              )
            })
          }
        </SimpleGrid>
      </Flex>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = () =>{
  return{
    paths:[],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async({ params }) =>{
  const { course } = params;


  // fetch course (params.slug) data from whereever
  let classes = null;

  switch(course){
    case 'math': classes = [
      { id: 1, title: 'Introdução à teoria matemática', number: 1, duration: 5},
      { id: 2, title: 'Introdução à teoria matemática II', number: 2, duration: 6},
      { id: 3, title: 'Compreendendo números', number: 3, duration: 6},
      { id: 4, title: 'Compreendendo operações básicas', number: 4, duration: 8},
    ]
      break;
    case 'phisics': classes = []
      break;
    case 'english': classes = []
      break;
    case 'chemistry': classes = []
      break;
    case 'talk': classes = []
      break;
    case 'writing': classes = []
      break;
    default: break;
  }

  if(!classes){
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }

  return{
    props:{
      course,
      classes
    }
  }
}