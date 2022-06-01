/*eslint-disable react/no-children-prop, react/no-unescaped-entities */
import { Box, Flex, Image, Heading, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import  Link  from 'next/link'
import React from 'react'
import {IoMenu} from 'react-icons/io5'

const Navbar = () => {
  return (
    <Flex zIndex='20' pos='fixed' bgColor='rgb(0,0,0,0.2)' backdropFilter='blur(14px)' justifyContent='space-between' alignItems='center' px={['20px','20px','50px','50px','70px']} w='100%'  h={['60px','60px','80px']}>
      <Link href='/' passHref>
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
          <Link passHref href ='/'>
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
          <Link passHref href='/project'>
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
          <Link passHref href='/about'>
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
          <Link passHref href='#contact'>
            <Heading fontFamily='Poppins' fontWeight='200'  fontSize='14px' >Contact</Heading>
          </Link>
        </Box>
      </Flex>
      <Box display={['block','block','none']}>
        <Menu size='lg' >
          <MenuButton
            as={IconButton}
            aria-label='Options'
            variant='unstyled'
            icon = {<IoMenu fontSize='36px' color='#A8AEBF'/>}
          />
          <MenuList bgColor='#323B54' border='transparent' color='#9C92F8' zIndex='10'>
            <Link  href='/' passHref>
              <MenuItem command='⌘T' >
                Home
              </MenuItem>
            </Link>
            <Link  href='/movies' passHref  >
              <MenuItem  command='⌘N'>
                Projects
              </MenuItem>
            </Link>
            <Link  href='/shows' passHref>
              <MenuItem command='⌘⇧N'>
                About
              </MenuItem>
            </Link>
            <Link href='#contact' passHref>
              <MenuItem command='⌘O'>
                Contact
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex >
  )
}

export default Navbar
