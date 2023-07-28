import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'

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
        image={image
          ? <Image src={image} alt={name} width={300} height={300} />
        : undefined}
        meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
      />
    </Link>
  ));

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable style={{ margin: '10px' }}>
    {mapProductsToCards(products)}
  </Card.Group>
);

export default ProductList;