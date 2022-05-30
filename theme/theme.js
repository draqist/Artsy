import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  fonts: {
    heading: `'Clash Display', 'Aktura', 'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
})

export default theme