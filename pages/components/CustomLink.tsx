import { Link, Box } from '@chakra-ui/react'
import NextLink from 'next/link'

import { useRouter } from 'next/router'

interface LinkProps{
  name: string;
  url: string;
}

export function CustomLink({ name, url }: LinkProps){
  const { asPath } = useRouter()
  

  if(asPath.includes(url)){
    return(
      <NextLink href={url} passHref>
        <Box display="flex" flexDir="column" justifyContent="space-between">
          <Link
            color="brand.secondary"
            w="24"
            textAlign="center"
            fontWeight="500"
            fontSize="lg"
            textDecoration="none"
            _hover={{
              textDecoration: 'none'
            }}
          >
            {name}
          </Link>
          <Box
            w="24"
            h="1"
            borderTopRadius="3"
            borderTopRightRadius="3"
            background="brand.secondary"
          />
        </Box>
        
      </NextLink>
    )  
  }
  else{
    return(
      <NextLink href={url} passHref>
        <Box display="flex" flexDir="column" justifyContent="space-between">
          <Link
            color="brand.white"
            w="24"
            textAlign="center"
            fontWeight="500"
            fontSize="lg"
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
              color: 'brand.secondary'
            }}
          >
            {name}
          </Link>
        </Box>
      </NextLink>
    )  
  }

  
}