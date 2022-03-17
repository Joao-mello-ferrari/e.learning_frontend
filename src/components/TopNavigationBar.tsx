import { Flex, Text, Icon } from '@chakra-ui/react'
import { UrlObject } from 'url'
import Link from 'next/link'

import { useFavorites } from '../context/favoritedCourses'

import { FiArrowLeft } from 'react-icons/fi'
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io'

interface TopNavigationBarProps{
  backUrl: UrlObject;
  title: String;
  courseId: number;
}

export function TopNavigationBar({ backUrl, title, courseId }:TopNavigationBarProps){
  const { favoriteCourses, addCourse, removeCourse } = useFavorites();

  return(
    <Flex w="100%" 
      maxW="1440" 
      justify={["space-between","start"]} 
      align="center" 
      px={["8","12"]} 
      pb={["8","4"]} 
      mb={["-4","0"]}
      background={["brand.primary","transparent"]}
    >
        <Link href={backUrl}>
          <Icon 
            as={FiArrowLeft}
            color={["brand.white","brand.dgray"]}
            h={[8,6]}
            w={[8,6]}
            mr="4"
            _hover={{
              cursor: 'pointer'
            }}
          />
        </Link>
          
        <Text color={["brand.white","brand.dgray"]} fontWeight="bold" fontSize="2xl" mr={["auto","0"]}>
          {title}
        </Text>

        { favoriteCourses.indexOf(courseId) !== -1
          ? <Icon 
              as={IoIosHeart}
              color="brand.secondary"
              h={[8,10]}
              w={[8,10]}
              ml="8"
              _hover={{
                cursor: 'pointer'
              }}
              onClick={()=>{ removeCourse(courseId); }}
            />
          : <Icon 
              as={IoIosHeartEmpty}
              color="brand.secondary"
              h={[8,10]}
              w={[8,10]}
              ml="8"
              _hover={{
                cursor: 'pointer'
              }}
              onClick={()=>{ addCourse(courseId); }}
            />
        }
        
      </Flex>
  )
}