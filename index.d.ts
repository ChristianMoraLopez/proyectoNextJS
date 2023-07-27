type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string



type TProductAttributes = {
  
  description: string
  medium: string
  dimensions: string
  style: string
}

type TProduct = {
  sku: string
  id: TProductId
  name: string
  artist: string
  year: number
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIARTDetailResponse = TProduct

type TAPIartResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}
