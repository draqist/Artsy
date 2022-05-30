import { Box, Flex, Heading, Link, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProjectCard = () => {
  return (
    <Box w='calc(100% - 40px)' border='2px solid ' pos='relative' px='20px' py='24px' bgColor='linear-gradient(`180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))' backdropFilter='blur(104px)' h='500px' borderRadius='10px'>
      <Heading color='#A8AEBF'> Flix </Heading>
      <Text fontSize='12px' color='white'> A web app where you can search for info about your favorite movies, tv shows and actors 😉. </Text>
      <Flex justifyContent='space-between' alignItems='center' pos='absolute' bottom='24px' w='100%'>
        <NextLink href='/projects' passHref>
          <Link fontFamily='Poppins' color='#A8AEBF'  fontSize='14px' _hover={{color: 'white'}}> Live link <ExternalLinkIcon mx='2px' /> </Link>
        </NextLink>
      </Flex>
    </Box>
  )
}

export default ProjectCard
