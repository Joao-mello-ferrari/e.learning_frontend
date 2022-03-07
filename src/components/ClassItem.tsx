import { Box, Flex, GridItem, Image, Text, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiPlayCircle, FiClock } from 'react-icons/fi'

import { ClassDescription } from './ClassDescription'
 
interface ClassItemProps{
  id: number;
  title: number;
  number: number;
  duration: number;
  slug: string;
  isCurrent: boolean;
}

export function ClassItem({ id, title, number, duration, slug, isCurrent }: ClassItemProps){
  const isCompleted = id < 3
  
  const { push } = useRouter();
  
  return(
    <GridItem 
      className="custom-grid"
      display="flex" 
      alignItems="center"
      h="160px" 
      w={["100%","440px"]} 
      onClick={()=>{push(slug)}}
      // pr={["2","0"]}
    >
      <Flex 
        w={["20%","120px"]} 
        h="60%"
        justify="center"
        align="center"
        background={isCompleted ? "#61C5BD" : "#FF6680"}
        zIndex="1"
        mr={["-6","-10"]}
        borderRadius="10"
      >
        <Icon 
          as={FiPlayCircle}
          w={14}
          h={14}
          color="brand.white"
        />
      </Flex>
      
      <Flex 
        flexDir="column" 
        bg={isCurrent ? "brand.plight" : "brand.lgray"}  
        p="8" 
        pl={["10","14"]}
        w={["70%","320px"]}
        h="100%"
        borderRadius="10" 
        position="relative"
      >
        <ClassDescription duration={duration} number={number} title={title}/>
        
        {isCompleted && 
          <Box 
            position="absolute" 
            bottom="4" 
            right="6" 
            px="2"
            py="1" 
            background="#61C5BD"
            borderRadius="8"
          >
            <Text fontSize="sm" color="brand.white">Completo!</Text>
          </Box>
        }
      </Flex>
    </GridItem>
  )
}