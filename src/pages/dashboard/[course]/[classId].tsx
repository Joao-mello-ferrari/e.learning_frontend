import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Header } from "../../../components/Header";
import { ClassItem } from '../../../components/ClassItem'
import { ClassDescription } from "../../../components/ClassDescription";
import { NavigationButton } from "../../../components/NavigationButton";
import { TopNavigationBar } from "../../../components/TopNavigationBar";

interface Class{
  id: number;
  title: string;
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
  course: { id: number, name: string};
  classes: Class[];
  currentClass: CurrentClass;
  params: object;
}    

export default function Course({ course, classes, currentClass }: CourseProps){
  const [inputValue, setInputValue] = useState('');
  
  const { asPath } = useRouter();

  const previousClassUrl = asPath.replace(String(currentClass.id),String(currentClass?.previousClassId));
  const nextClassUrl = asPath.replace(String(currentClass.id),String(currentClass?.nextClassId));
  
  return (
    <Box maxW="1440" w="100vw" m="0 auto">
      <Header catchInputValue={(e: React.ChangeEvent<HTMLInputElement>)=>{setInputValue(e.target.value)}}/>

      <Flex 
        flexDir="column" 
        background="brand.background"  
        borderTopRadius="20"
        mt={"-3vh"}
        p={["0","10"]}>

        <TopNavigationBar
          backUrl={"/dashboard" as any} 
          title={course.name}
          courseId={course.id}
        />

        <Flex flexDir={["column","row"]}>

          <Flex
            flexDir="column"
            w={["100%","60%"]}
            h="100vh"
            align="start"
            pt={["0","2"]}
            position={["unset","sticky"]}
            top="-32"
          >
            <Flex pl={["0","8"]} w="100%">
              <iframe 
                className="class-video"
                allowFullScreen
                src={currentClass.url}
              />
            </Flex>
            <Flex flexDir="column" px={["8","12"]} mt="4">
              <ClassDescription 
                duration={currentClass.duration} 
                number={currentClass.number} 
                title={currentClass.title}
                titleSize="2xl"
              />
              <Text mt="6" fontSize="xl" lineHeight="1.4" color="brand.gray">
                <div className="class-description" dangerouslySetInnerHTML={{__html:currentClass.description}}/>
              </Text>
              <Flex w="100%" justify="center" align="center" mt="8">
                <NavigationButton
                  isActive={!!currentClass?.previousClassId}
                  urlToPushTo={previousClassUrl}
                />
                <NavigationButton
                  isNext
                  isActive={!!currentClass?.nextClassId}
                  urlToPushTo={nextClassUrl}
                />
              </Flex>
            </Flex>
          </Flex>
          
          <VStack
            spacing="16"
            mt={["8","8"]}
            p="4"
            pl="6"
            w={["100%","40%"]}
          >
            { classes
              .filter(cClass=>cClass.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
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
          </VStack>
        </Flex>
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
      { id: 5, title: 'Introdução à teoria matemática', number: 1, duration: 5},
      { id: 6, title: 'Introdução à teoria matemática II', number: 2, duration: 6},
      { id: 7, title: 'Compreendendo números', number: 3, duration: 6},
      { id: 8, title: 'Compreendendo operações básicas', number: 4, duration: 8},
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
      title: 'Introdução à teoria matemática', 
      number: 1, 
      duration: 5,
      url: 'https://youtube.com/embed/UwLFO1Di3Bg',
      description:"<p>Nesta aula será abordado os conceitos mais básicos da matemática.</p><p>Se trata de uma abordagem inicial, para criar uma base sólida na aprendizagem.</p>",
      previousClassId: null,
      nextClassId: 2,
    }
      break;
    case 2: currentClass = {
      id: 2, 
      title: 'Introdução à teoria matemática II', 
      number: 1, 
      duration: 5,
      url: 'https://youtube.com/embed/UwLFO1Di3Bg',
      description:"<p>Nesta aula será abordado os conceitos mais básicos da matemática.</p><p>Se trata de uma abordagem inicial, para criar uma base sólida na aprendizagem.</p>",
      previousClassId: 1,
      nextClassId: 3,
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

  let completeCourse = null;
  switch(course){
    case 'math':
      completeCourse = { id:1, name:'Matemática'};
      break;
    
    case 'phisics':
      completeCourse = { id:2, name:'Física'};
      break;
  }
    
    // { id:3, imgUrl:'/assets/English.svg', alt:'english', course:'Inglês', classes:44, slug:'/english/1'},
    // { id:4, imgUrl:'/assets/Quimica.svg', alt:'chemistry', course:'Química', classes:20, slug:'/chemistry/1'},
    // { id:5, imgUrl:'/assets/Talk.svg', alt:'talk', course:'Diálogo em público', classes:18, slug:'/talk/1'},
    // { id:6, imgUrl:'/assets/Build.svg', alt:'writing', course:'Redação', classes:54, slug:'writing/1'}
  

  return{
    props:{
      course:completeCourse,
      classes,
      currentClass,
      params
    },
    revalidate: 1
  }
}
