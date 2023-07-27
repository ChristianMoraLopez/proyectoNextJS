import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'
import Layout from '@components/Layout/Layout'
import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout

  // Manejar errores - componentDidCatch
  return (
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>    
    )

  
}

export default MyApp
