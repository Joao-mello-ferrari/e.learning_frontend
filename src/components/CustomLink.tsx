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
            w={["100%","24"]}
            textAlign={["start","center"]}
            fontWeight="500"
            fontSize={["2xl","lg"]}
            textDecoration="none"
            mt={["2","0"]}
            background={["#7459AF","none"]}
            p={["2","0"]}
            borderRadius={["10","0"]}
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
            visibility={["hidden", "visible"]}
          />
        </Box>
        
      </NextLink>
    )  
  }
  return(
    <NextLink href={url} passHref>
      <Box display="flex" flexDir="column" justifyContent="space-between">
        <Link
          color="brand.white"
          w={["100%","24"]}
          textAlign={["start","center"]}
          fontWeight="500"
          fontSize={["2xl","lg"]}
          textDecoration="none"
          mt={["2","0"]}
          p={["2","0"]}
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