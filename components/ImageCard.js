import { Box, Flex, Heading, Image, Link, Tag, Text } from '@chakra-ui/react';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {motion} from 'framer-motion'

const ImageCard = () => {
  // const anim = initial = {{x:-60, opacity: 0, scale: 1.3 }} animate={{x: 0, scale: 1, opacity: 1, transition:{duration: 1,}}}
  return (
    <Box w='calc(100%)' border='2px solid' borderColor='gray.600' p='6px' bgColor='linear-gradient(`180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'  backdropFilter='blur(104px)'  borderRadius='14px'>
      <Flex justifyContent='center' borderRadius='8px' w='100%' >
        <Image as ={motion.img}  src='/profile3.jpeg'   borderRadius='8px' alt='profile-image'/>
      </Flex>
    </Box>
  )
}

export default ImageCard
