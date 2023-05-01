import { ChakraProvider, theme } from '@chakra-ui/react';
import { CartProvider } from '../context/cartContext';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
      <CartProvider>    
          <Component {...pageProps} /> 
      </CartProvider>
       </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
