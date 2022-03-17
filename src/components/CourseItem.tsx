import { GridItem, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'


interface CustomGriditemProps{
  imgUrl: string;
  alt: string;
  course: string;
  classes: number;
  slug: string;
}

export function CourseItem({ imgUrl, alt, course, classes, slug }: CustomGriditemProps){
  const { push } = useRouter();
  
  return(
    <GridItem 
      bg="brand.lgray" 
      h="200px" 
      w={["100%","200px"]} 
      borderRadius="10" 
      p="6" 
      pl={["10","6"]}
      className="custom-grid"
      onClick={()=>{push(`/dashboard/${slug}`)}}
    >
      <Image src={imgUrl} alt={alt} h={[20]}/>
      <Text color="brand.dgray" mt="4">{course}</Text>
      <Text color="brand.gray" fontSize="sm">{classes} aulas</Text>
    </GridItem>
  )
}