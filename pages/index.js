/* eslint-disable react/no-unescaped-entities*/
import { Box, Flex, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Link, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard';
import ImageCard from '../components/ImageCard';
import { useEffect, useState } from 'react';


export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => setLoading(true), 500)
  }, [])
  return (
    <Box w='100%' bg='#10101A'>
      <Navbar />
      <Box px='20px'>
        <Flex justifyContent='center' alignItems='center' h='500px'>
          {/* <Image alt='media logos' src='/handright.webp' alt='placement' w='380px' /> */}
          <Text fontSize='14px' color='white' fontFamily='Poppins'>Howdy 👋, I'm Abdullah and I develop, engineer and translate products through user interface designs into pixel-perfect, clean, optimal and reusable code. </Text>
        </Flex>
        <Box py='20px'>
          <Heading fontSize='40px' lineHeight='40px' color='white' mb='8px'> Living to <Text as={motion.span} bgGradient='linear(45deg, #6bc5f8, #7928CA, #FF2080,#6bc5f8)' bgClip='text'> engineer products </Text> into breath-taking reality.</Heading>
          <NextLink href='/projects' passHref>
            <Link fontFamily='Poppins' color='#A8AEBF' fontSize='14px' _hover={{color: 'white'}}> View my projects <ExternalLinkIcon mx='2px' /> </Link>
          </NextLink>
        </Box>
      </Box>
      <Box id='about' borderTop='1px solid' borderBottom='1px solid' p='20px' pb='30px' mb='20px'>
          <Heading>
            About Me
          </Heading>
        <Flex justifyContent='center' mt='10px'>
          <ImageCard/>
        </Flex>
        <Box my='12px'>
          <Text color='white' fontSize='18px'> 
            I'm Abdullah, a UI Engineer and Frontend Developer. I translate interface designs, engineer and develop products by writing clean, efficient and reusable code. Creating aesthetically pleasing user interface that keeps end users glued to their screen is my forte. I am also implement efficiently business-side logic.
          </Text>
        </Box>
        <Box>
          <Heading> Tools I work with </Heading>
        </Box>
      </Box>
      <Box id='projects' borderTop='1px solid' borderBottom='1px solid' p='20px' pb='30px' mb='20px'>
          <Heading>
            Projects
          </Heading>
        <Flex justifyContent='center' mt='10px'>
          <ProjectCard/>
        </Flex>
      </Box>
      <Box id='contact' bg='rgba(0,0,0,0.6)' color='white' px='20px' py='30px' borderTop='px solid #D3D3D3'>
        <Box py='20px'>
          <Heading fontSize='18px' fontWeight='500' > Now that we're acquainted, shoot me a <Text as='span' bgGradient='linear(90deg, #b0f3f1,#ffcfdf)' bgClip='text'>Mail</Text>, DM me on <Text as='span' color='twitter.200'>Twitter,</Text> or connect with me on <Text as='span' color='linkedin.300'>LinkedIn,</Text>  let's cook magic 🪄  </Heading>
        </Box>
        <Box>
          {/* <Heading fontSize='20px' fontWeight='500' color='white' mt='10px' fontFamily='Aktura'> Need to get in touch! Reach out  </Heading> */}
          <Flex justifyContent='space-between' alignItems='center' py='20px'>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href=''>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-gmail.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href='https://twitter.com/Hackth8r'>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-twitter.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href='https://github.com/Draqode'>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-github-squared.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href='https://github.com/Draqode'>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-linkedin.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href=''>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-hashnode.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        </Box>
        <Box mt='0px'>
          <Flex justifyContent='space-between' alignItems='center' py='20px'>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href='https://twitter.com/Hackth8r'>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-discord-64.png' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href='https://github.com/Draqode'>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-medium-monogram.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                    </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}