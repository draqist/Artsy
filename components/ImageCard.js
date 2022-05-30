import { Box, Flex, Heading, Image, Link, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ImageCard = () => {
  return (
    <Box w='calc(100%)' border='2px solid ' p='6px' bgColor='linear-gradient(`180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'  backdropFilter='blur(104px)'  borderRadius='8px'>
      <Flex justifyContent='center' borderRadius='8px' w='100%'>
        <Image src='/profile3.jpeg'   borderRadius='8px' alt='profile-image'/>
      </Flex>
    </Box>
  )
}

export default ImageCard
