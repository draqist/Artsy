import { Box, Heading, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Fonts from '../Fonts';

export default function Home() {
  const netlifyGreen = '012231' 
  const shadeBlue = '091124' 
  const shadeBlu = '091121'
  const adeolablue = '10101A'
  const trans ='1D1E29'
  return (
    <Box w='100%' h='100vh' bg='#10101A'>
      <Fonts/>
      <Navbar />
      <Image src='/handright.webp' alt='placement' w='400px' />
      <Box px='20px'>
        <Heading fontSize='36px'> Living to engineer products into breath-taking reality.</Heading>
      </Box>
    </Box>
  )
}
