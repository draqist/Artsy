/*eslint-disable react/no-children-prop, react/no-unescaped-entities */
import { Box, Flex, Image, Heading,  IconButton, useDisclosure, Slide } from '@chakra-ui/react'
import  Link  from 'next/link'
import React, { useState } from 'react'
import {IoMenu} from 'react-icons/io5'

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const [toggler, setToggler] = useState(false)
  return (
    <>
      <Flex zIndex='20' bgColor='transparent' justifyContent='space-between' alignItems='center' px={['20px','20px','50px','50px','70px']} w='100%'  h={['60px','60px','80px']}>
        <Link href='/'>
          <Heading color='white' fontSize='24px' className='logo'> Dråq</Heading>
        </Link>
        <Flex w='424px' color='white' display={['none','none','flex']} justifyContent='space-between' alignItems='center'>
          {/* <Box
            px='8px'
            as='a'
            cursor='pointer'
            variant='ghost'
            _hover={{
              bg: 'transparent',
              pb:'4px',
              borderBottom: '2px solid #323B54',
            }}
          >
            <Link  href ='/'>
              <Heading fontFamily='Poppins' fontWeight='200'  fontSize='14px' >Home</Heading>
            </Link>
          </Box> */}
          <Box
            as='a'
            cursor='pointer'
            px='8px'
            variant='ghost'
            _hover={{
              bg: 'transparent',
              pb:'4px',
              borderBottom: '2px solid #323B54',
            }}
          >
            <Link href='#project'>
              <Heading fontFamily='Poppins' fontWeight='200'  fontSize='14px' >Projects</Heading>
            </Link>
          </Box>
          <Box
            as='a'
            cursor='pointer'
            px='8px'
            variant='ghost'
            _hover={{
              bg: 'transparent',
              pb:'4px',
              borderBottom: '2px solid #323B54',
            }}
          >
            <Link href='#about'>
              <Heading fontFamily='Poppins' fontWeight='200'  fontSize='14px' >About</Heading>
            </Link>
          </Box>
          <Box
            as='a'
            cursor='pointer'
            px='8px'
            variant='ghost'
            _hover={{
              bg: 'transparent',
              pb:'4px',
              borderBottom: '2px solid #323B54',
            }}
          >
            <Link href='#contact'>
              <Heading fontFamily='Poppins' fontWeight='200'  fontSize='14px' >Contact</Heading>
            </Link>
          </Box>
        </Flex>
        <Box display={['block', 'block', 'none']}>
          <IconButton aria-label='menu' variant='unstyled' onClick={() => {
            onToggle()
            setToggler(!toggler)
          }} icon={<IoMenu fontSize='36px' color='#A8AEBF' />} />
            <Flex
              px='20px'
              color='white'
              bgColor='linear-gradient(`180deg,rgba(35,37,49,.5),rgba(15,15,24,.5))'
              backdropFilter='blur(54px)'
              shadow='md'
              h='100vh'
              w='40vw'
              alignItems='center'
              justifyContent='center'
              direction='column'
              pos='absolute'
              right='0'
              top = '0'
              visibility={toggler ? 'visible' : 'hidden'}
              animate={{ x: '-40vw', opacity: 1, transition: {duration: 2, ease: 'easeIn'} }}
              initial={{x:0, opacity: 0}}
            >
              <Flex
                alignItems='center'
                justifyContent='space-between'
                direction='column'
                h='250px'>
                <Box onClick={() => setToggler(false)}>
                  <Link href='/' > Home </Link>
                </Box>
                <Box onClick={() => setToggler(false)}>
                  <Link href='#projects' > Projects</Link>
                </Box>
                <Box onClick={() => setToggler(false)}>
                  <Link href='#about' >About</Link>
                </Box>
                <Box onClick={() => setToggler(false)}>
                  <Link href='#contact' >Contact</Link>
                </Box>
              </Flex>
            </Flex>
        </Box>
      </Flex >
    </>
  )
}

export default Navbar
