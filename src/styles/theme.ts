import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
  colors:{
    brand:{
      'primary': '#6548A3',
      'secondary': '#FF6680',
      'background': '#F0EDF5',
      'white': '#FFFFFF',
      'gray': '#6C6C80'
    }
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  
})