import React, { useEffect, useState } from 'react'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import Layout from '@components/Layout/Layout'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

useEffect(() => {
    window
      .fetch('/api/art')
      .then((response) => response.json())
      .then(({ data }: TAPIartResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <Layout>
    <KawaiiHeader />
    <ProductList products={productList} />
  </Layout>
  )
}

export default HomePage // Exporta directamente el componente HomePage
