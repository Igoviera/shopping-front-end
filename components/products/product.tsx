import { Box, Container } from '@chakra-ui/react'
import { useContext } from 'react'
import { Products } from '.'
import { CartContext } from '../../context/cartContext'
import { Product } from '../../types/produtc'

export function Allproduct() {
  const { allProducts } = useContext(CartContext)

  return (
    <>
      {allProducts?.map((product: Product) => (
        <Box key={product._id} >
          <Products product={product} />
        </Box>
      ))}
    </>
  )
}
