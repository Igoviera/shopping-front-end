import { Button, Card, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import Link from 'next/link'

export function CardTotal() {
  const { user } = useContext(CartContext)

  const userProducts = user?.cart.map((item: any) => {
    return item.valorTotal
  })
  console.log("🚀 ~ file: cardTotal.tsx:12 ~ userProducts ~ userProducts:", userProducts)

  return (
    <>
      {userProducts === undefined ? (
        <Flex w="100vw" justifyContent={'center'} mt={'16px'}>
          <Heading>Seu carinho está vazio!🛒😕</Heading>
        </Flex>
      ) : (
        <Card w={['md', '2xl']} p={'16px'} mt={'40px'}>
          <Stack mt={3}>
            <Heading mb={10} size="md">Resumo do pedido</Heading>
            <Flex justifyContent={'space-between'}>
            <Text>Frete:</Text>
            <Heading color={'green.400'} size="16px">
                Grátis
              </Heading>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Text>Valor total:</Text>
              <Heading color={'green.400'} size="md">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(userProducts)}
              </Heading>
            </Flex>
          </Stack>
          <Button mt={10} colorScheme="green" color={'white'}>
            <Link href="/checkout">Finalizar compra</Link>
          </Button>
        </Card>
      )}
    </>
  )
}
