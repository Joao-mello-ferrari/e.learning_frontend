import { Box, Flex, GridItem, Image, Text, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FiPlayCircle, FiClock } from 'react-icons/fi'

interface ClassDescriptionProps{
  title: number;
  number: number;
  duration: number;
  titleSize?: string;
}

export function ClassDescription({ title, number, duration, titleSize='xl' }: ClassDescriptionProps ){
  return(
    <>
      <Text fontSize={titleSize} color="brand.dgray">{title}</Text>
      <Flex mt="6">
        <Text fontSize="sm" color="brand.gray">Aula {String(number).padStart(2,'0')}</Text>
        <Flex align="center" justify="center" ml="4"> 
          <Icon 
            as={FiClock}
            w={4}
            h={4}
            color="brand.gray"
            />
          <Text fontSize="sm" color="brand.gray" ml="1">{duration} min</Text>
        </Flex>
      </Flex>
    </>
  )
}