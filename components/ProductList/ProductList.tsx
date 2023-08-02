import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import CarouselImages from './CarouselInnApp'


type ProductListProps = {
  products: TProduct[]
}


const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" 
    className='m-2'
    as={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={<Image src={image} alt={name} width={300} height={300} />
       }
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (

<div >
  <div className=' h-0 invisible  md:visible md:h-fit '>
  <CarouselImages />
  </div>

<Card.Group className="justify-evenly m-3">
  {mapProductsToCards(products)}
</Card.Group>

</div>

);

export default ProductList;