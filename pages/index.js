/* eslint-disable react/no-unescaped-entities*/
import { Box, Flex, FormControl, FormHelperText, FormLabel,Grid, Heading, Image, Input, Link, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import NextLink from 'next/link'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard';
import ImageCard from '../components/ImageCard';
import { useEffect, useRef, useState } from 'react';
import ProjectsData from '../utils/Projectinfo'
import gsap from 'gsap';
// import locomotiveScroll from 'locomotive-scroll';


export default function Home() {
  const [loading, setLoading] = useState(false)
  let line1 = "I'm Abdullah, a UI Engineer and Frontend Developer. I translate web interface designs, engineer and develop products by writing clean, efficient and reusable code. Creating aesthetically pleasing user interface that keeps end users glued to their screen is my forte. I am also able implement efficiently business-side logic."
  // useEffect(() => {
  //   gsap.from([line1, line2], {
  //     duration: .8,
  //     ease: 'power3.out',
  //     y: 64,
  //     stagger: {
  //       amount: .15,
  //     },
  //     delay: 6
  //   })
  // }, [line1, line2])
  const light = '#600101A'
  let aboutRef = useRef(null)
  const preloadertext = {
    initial:{y: -10, opacity: 0},
    animate:{y: 0, opacity:1}
  }
  const transition = {
    duration: 1.4,
    ease: [0.61, 1, 0.88, 1],
  }
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.45,
        staggerChildren: 0.08,
      }
    }
  }
  const letter = {
    hidden: { opacity: 0, y: 50 , color: '#718'},
    visible: {
      opacity: 1,
      y: 0,
      color: '#e1e1e1'
    }
  }
  return (
    <>
      <Flex h='100vh' textAlign='center' as={motion.div} animate={{ top: '-100vh', transition: { ...transition, delay: 3.5, staggerChildren: 0.5 } }} position='fixed' w='100vw' zIndex='2000000' top='0' left='0' justifyContent='center'  alignItems='center' bg='#10101a'>
          <Text as={motion.span} 
          initial={{y: 40, opacity: 0,}}
          animate={{y: 0, opacity:1, transition: {duration: 2}}} color='gray.200' fontSize='24px' fontWeight='500' >  Developed by Draq with 💜   </Text>
      </Flex>
    <Box bg='#10101A'>
      <Navbar />
      <Box px={['20px','20px','50px','50px','70px']}>
        <Flex justifyContent='center' alignItems='center' h='500px' textAlign='center'>
          {/* <Image alt='media logos' src='/handright.webp' alt='placement' w='380px' /> */}
          <Text fontSize='14px' color='white' fontFamily='Poppins'>Howdy 👋, I'm Abdullah and I develop, engineer and translate products through user interface designs into pixel-perfect, clean, optimal and reusable code. </Text>
        </Flex>
        <Box py='20px' initial={{x: -40, opacity: 0, scale: .25}} whileInView={{x: 0, opacity: 1, scale: 1 , transition: {duration: 1.65, delay: 3.0 }}} viewport ={{once: true}} textAlign='left'>
            <Heading as={motion.h2} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 4, staggerChildren:.75 }}} viewport={{once: true}} fontSize={['40px', '', '70px']} lineHeight={['40px', '', '68px']} color='white' mb='8px'> Living to
              <Text fontSize='inherit' bgGradient='linear(45deg, #6bc5f8, #7928CA, #FF2080,#6bc5f8)' bgClip='text'> engineer products </Text>
              into breath-taking reality.
            </Heading>
          <NextLink href='#projects' passHref>
            <Link fontFamily='Poppins' color='#A8AEBF' fontSize={['14px', '', '20px']} _hover={{color: 'white'}}> View my projects <ExternalLinkIcon mx='2px' /> </Link>
          </NextLink>
        </Box>
      </Box>
      <Box id='projects' borderTop='1px solid' borderBottom='1px solid' p='20px' pb='30px' mb='20px' px={['20px','20px','50px','50px','70px']}>
          <Heading color='gray.700'>
            Selected Projects
          </Heading>
        <Flex wrap={['nowrap','nowrap','wrap']} justifyContent='space-between'  overflow={['scroll','scroll','hidden']} mt='14px'>
          {
            ProjectsData.map((data, index) => (
              <ProjectCard key={index} {...data} />
            ))
          }
        </Flex>
        </Box>
        <Box id='about' borderTop='1px solid' borderBottom='1px solid' p='20px' pb='30px' mb='20px' px={['20px','20px','50px','50px','70px']}>
          <Heading color='gray.700'>
            About Me
          </Heading>
        <Flex justifyContent='center' mt='10px'>
          <ImageCard/>
        </Flex>
          <Box my='12px' textAlign='center'>
            <Heading as={motion.h3} fontFamily='Poppins' lineHeight='22px' fontWeight='500' letterSpacing='4' variants={sentence} initial="hidden" whileInView="visible" viewport={{once: true}}>
              {
                line1.split("").map((char, index) => {
                  return (
                    <Text as={motion.span} key={char + "-" + index} variants={letter} color='white' fontSize='16px'> 
                      {char}
                    </Text>
                  )
                })
              }
            </Heading>
          </Box>
        </Box>
        {/* <Box bgColor='gray.800' px={['20px','20px','50px','50px','70px']} py='30px' mb='20px' borderBottom='1px solid'>
        <Heading fontSize='28px' color='gray.600'> Tools I utilize </Heading>
        <Grid templateColumns='repeat(5, 1fr)' gap='8' py='20px'>
            <Box w={['', '64px', '200px', '200px', '300px']}>
              <NextLink passHref href=''>
                <Link>
                  <Flex alignItems='center' justifyContent='center'>
                    <Image alt='media logos' src='/icons8-react.svg' w='48px' />
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
                    <Image alt='media logos' src='/icons8-figma.svg' w='48px' />
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
                    <Image alt='media logos' src='/icons8-github.svg' w='48px' />
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
                    <Image alt='media logos' src='/icons8-adobe-xd.svg' w='48px' />
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
                    <Image alt='media logos' src='/chakra.svg' w='48px' />
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
                    <Image alt='media logos' src='/icons8-firebase.svg' w='48px' />
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
                    <Image alt='media logos' src='/framer.svg' w='48px' />
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
                    <Image alt='media logos' src='/jest.svg' w='48px' />
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
                    <Image alt='media logos' src='/google.svg' w='48px' />
                    <Box display={['none', 'none', 'block']}>
                      </Box>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
          </Grid>
        </Box> */}
      <Box id='contact' bg='rgba(0,0,0,0.2)' color='white' px={['20px','20px','50px','50px','70px']} py='30px' borderTop='px solid #D3D3D3'>
        <Box py='20px'>
          <Heading fontSize='18px' fontWeight='500' > Now that we're acquainted, shoot me a <Text as='span' bgGradient='linear(90deg, #b0f3f1,#ffcfdf)' bgClip='text'>Mail</Text>, DM me on <Text as='span' color='twitter.200'>Twitter,</Text> or connect with me on <Text as='span' color='linkedin.300'>LinkedIn,</Text>  let's cook magic 🪄  </Heading>
        </Box>
        <Box>
          <Heading fontSize='20px' fontWeight='500' color='white' mt='10px' fontFamily='Aktura'> Need to get in touch! Reach out  </Heading>
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
    </>
  )
}