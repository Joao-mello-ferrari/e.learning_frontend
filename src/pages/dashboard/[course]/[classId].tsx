import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import { Header } from "../../../components/Header";
import { ClassItem } from '../../../components/ClassItem'
import { ClassDescription } from "../../../components/ClassDescription";

interface Class{
  id: number;
  title: number;
  number: number;
  duration: number;
}

interface CurrentClass extends Class{
  url: string;
  description: string;
  nextClassId: number | null;
  previousClassId: number | null;
}

interface CourseProps{
  course: string;
  classes: Class[];
  currentClass: CurrentClass;
  params: object;
}    

export default function Course({ course, classes, currentClass, params }: CourseProps){
  console.log(currentClass)
  
  return (
    <Box maxW="1440" m="0 auto" overflowX="hidden">
      <Header/>
      <Flex
        background="brand.background"
        flexDir={["column","row"]}
        borderTopRadius="20"
        mt={"-3vh"}
        p={["6","10"]}
      >
        <Flex
          flexDir="column"
          w="60%"
          justify="start"
          pt="2"
        >
          <iframe 
            className="class-video"
            width="640" 
            height="360"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          />
          <Flex flexDir="column" px="6" mt="2">
            <ClassDescription 
              duration={currentClass.duration} 
              number={currentClass.number} 
              title={currentClass.title}
              titleSize="2xl"
            />
            <Text mt="6" fontSize="xl" lineHeight="1.4" color="brand.gray">
              <div className="class-description" dangerouslySetInnerHTML={{__html:currentClass.description}}/>
            </Text>
          </Flex>
        </Flex>
        
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
                  isCurrent={courseClass.id === currentClass.id}
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
  let { course, classId } = params;

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

  let currentClass = null;

  switch(Number(classId)){
    case 1: currentClass = {
      id: 1, 
      title: 'Introdução à teoria matemática II', 
      number: 1, 
      duration: 5,
      url: '',
      description:"<p>Nesta aula será abordado os conceitos mais básicos da matemática.</p><p>Se trata de uma abordagem inicial, para criar uma base sólida na aprendizagem.</p>",
      nextClassId: 2,
      previousClassId: null
    }
      break;
    case 2: currentClass = {
      id: 1, 
      title: 'Introdução à teoria matemática', 
      number: 1, 
      duration: 5,
      url: '',
      description:"<p>Nesta aula será abordado os conceitos mais básicos da matemática.</p><p>Se trata de uma abordagem inicial, para criar uma base sólida na aprendizagem.</p>",
      nextClassId: 3,
      previousClassId: 1
    }
      break;
    case 2: currentClass = []
      break;
    case 3: currentClass = []
      break;
    case 4: currentClass = []
      break;
    case 5: currentClass = []
      break;
    case 6: currentClass = []
      break;
    default: break;
  }

  return{
    props:{
      course,
      classes,
      currentClass,
      params
    },
    // revalidate: 1
  }
}
