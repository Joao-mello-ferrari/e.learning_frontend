import { Box, GridItem, Image, Text, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { FiTrash } from 'react-icons/fi'

interface CustomGriditemProps{
  imgUrl: string;
  alt: string;
  course: string;
  classes: number;
  slug: string;
  isEditing?: boolean
}

export function CourseItem({ imgUrl, alt, course, classes, slug, isEditing }: CustomGriditemProps){
  const { push } = useRouter();
  
  return(
    <GridItem 
      bg="brand.lgray" 
      h="200px" 
      w={["100%","200px"]} 
      borderRadius="10" 
      p="6" 
      pl={["10","6"]}
      position="relative"
      transition= 'transform 0.3s' 
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.1)'
      }}
      onClick={()=>{ if(!isEditing) push(`/dashboard/${slug}`) }}
    >
      <Image src={imgUrl} alt={alt} h={[20]}/>
      <Text color="brand.dgray" mt="4">{course}</Text>
      <Text color="brand.gray" fontSize="sm">{classes} aulas</Text>

      { isEditing &&
        <Icon 
          as={FiTrash} 
          position="absolute" 
          top="4" 
          right="4"
          color="brand.gray"
          onClick={()=>{
            
          }}
      />
      }
      
    </GridItem>
  )
}