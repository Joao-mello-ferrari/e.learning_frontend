import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Header } from "../../../components/Header";
import { ClassItem } from '../../../components/ClassItem'
import { ClassDescription } from "../../../components/ClassDescription";
import { NavigationButton } from "../../../components/NavigationButton";
import { TopNavigationBar } from "../../../components/TopNavigationBar";
import { getClassesFromCourse, getCompleteClass } from "../../../helpers/mockedData";

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
  course: { id: number, name: string, slug: string};
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
                    slug={`/dashboard/${course.slug}/${courseClass.id}`}
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

  const [classes, completeCourse] = getClassesFromCourse(course);
  const [currentClass, redirectClassId] = getCompleteClass(course, Number(classId));

  if(!classes || !completeCourse || !currentClass){
    return{
      redirect:{
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  if(!!redirectClassId){
    return{
      redirect:{
        destination: `/dashboard/${course}/${redirectClassId}`,
        permanent: false
      }
    }
  }

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
