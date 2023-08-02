import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'

import { CSymbol } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text className='min-w-fit lg:min-w-full '>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
            className='flex flex-col md:flex-row'
          >
            <CSymbol className='container mx-auto w-16 h-16  md:h-12 md:w-12 '/>
            <div className='invisible md:visible'>
            Art Store
            </div>
            
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
