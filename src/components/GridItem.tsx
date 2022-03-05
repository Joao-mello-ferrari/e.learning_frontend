import { GridItem, Image, Text } from '@chakra-ui/react'

interface CustomGriditemProps{
  imgUrl: string;
  alt: string;
  course: string;
  classes: number;
}

export function CustomGridItem({ imgUrl, alt, course, classes }: CustomGriditemProps){
  return(
    <GridItem bg="brand.lgray" h="200" w={["100%","200px"]} borderRadius="10" p="6" pl={["10","6"]}>
      <Image src={imgUrl} alt={alt} h={[20]}/>
      <Text color="brand.dgray" mt="4">{course}</Text>
      <Text color="brand.gray" fontSize="sm">{classes} aulas</Text>
    </GridItem>
  )
}