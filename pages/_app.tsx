import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import Layout from '@components/Layout/Layout'
import CartProvider from '@store/Cart'
import { ChakraProvider } from '@chakra-ui/react'



const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout

  // Manejar errores - componentDidCatch
  return (
    <ChakraProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>    

    </ChakraProvider>

    )

  
}

export default MyApp
