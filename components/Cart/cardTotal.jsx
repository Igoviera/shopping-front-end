import { Button, Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Link from "next/link";

export function CardTotal() {
    const { allProductsCart } = useContext(CartContext)

    return (
        <>
            {allProductsCart?.product.length === 0 ?
                <Flex w='100vw' justifyContent={'center'} mt={'16px'}>
                    <Heading >Seu carinho está vazio!🛒😕</Heading>
                </Flex>
                :
                <Card w={['md' ,'2xl']} p={'16px'} mt={'16px'} >
                    <Stack alignItems={'center'} mt={3}>
                        <Heading size='md'>Meu carrinho</Heading>
                        <Flex gap={5}>
                            <Text>Valor total:</Text>
                            <Heading
                                color={'green.400'}
                                size='md'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                    .format(allProductsCart?.valorTotal)}
                            </Heading>
                        </Flex>
                    </Stack>
                    <Button mt={10} colorScheme="green" color={'white'}>
                        <Link href='/checkout'>
                            Finalizar compra
                        </Link>                     
                    </Button>
                </Card>
            }
        </>

    )
}