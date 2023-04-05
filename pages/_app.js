import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from '../context/cartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>     
    </ChakraProvider>
  )
}

export default MyApp
