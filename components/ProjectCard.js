import { Box, Flex, Heading, Image, Link, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProjectCard = (props) => {
  const {title, desc, live_url, github} = props
  return (
    <Box minWidth='calc(100% - 20px)'  border='2px solid' px='16px' borderColor='gray.600' py='14px' bgColor='linear-gradient(`180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))' my='10px' mr='10px'  backdropFilter='saturation(180%) blur(104px)' h='auto' borderRadius='14px'>
      <Heading color='gray.400'> {title} </Heading>
      <Box h='60px'>
        <Text fontSize='12px' color='white'> {desc} </Text>
      </Box>
      <Flex pt='14px' justifyContent='center' w='100%' h={['400px', '','unset']} >
        <Image src='/flix.png' borderRadius='8px' objectFit='cover' alt='profile-image'/>
      </Flex>
      <Box w='100%'>
        <Flex justifyContent='space-between' alignItems='center'  mt='18px'>
          <NextLink href={live_url } passHref>
            <Link fontFamily='Poppins' isExternal color='#A8AEBF'  fontSize='14px' outline='0px' _focus={{ boxShadow:'none', outline: 'transparent' }} _hover={{color: 'white'}}> Live link <ExternalLinkIcon mx='2px' /> </Link>
          </NextLink>
          <NextLink href={ github } passHref>
            <Link fontFamily='Poppins' color='#A8AEBF' isExternal fontSize='14px' outline='0px' _focus={{ boxShadow:'none', outline: 'transparent' }} _hover={{ color: 'white' }}>
              <Image alt='media logos' src='/icons8-github.svg' w='28px'/>
            </Link>
          </NextLink>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProjectCard
