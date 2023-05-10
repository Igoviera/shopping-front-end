import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Img, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Product } from '../../types/produtc'
import { RiDeleteBin6Line } from 'react-icons/ri'

export function ProductCart() {
    const { user, remove } = useContext(CartContext)

    const userProducts = user?.cart.flatMap((item: any) => {
        return item.product.map((product: any) => {
            return product
        })
    })
    console.log("🚀 ~ file: index.tsx:15 ~ userProducts ~ userProducts:", userProducts)

    return (
        <Box>
            {userProducts && (
                <Heading as={'h2'} size="md">
                    Meu carrinho
                </Heading>
            )}
            {userProducts?.map((item: Product, index: Number) => (
                <Card
                    mt={'16px'}
                    pt={'16px'}
                    key={`${item._id}${index}`}
                    direction={{ base: 'column', md: 'row' }}
                    overflow="hidden"
                    variant="outline"
                    alignItems={'center'}
                >
                    <Image
                        marginLeft={5}
                        objectFit="cover"
                        maxW={['200px', '200px', '90px']}
                        maxH={['200px', '200px', '90px']}
                        src={item.img}
                        alt="Caffe Latte"
                    />

                    <CardBody>
                        <Heading size="md">{item.name}</Heading>
                        <Heading color={'green.400'} size="md">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                                item.price
                            )}
                        </Heading>
                        <Text py="2">{item.description}</Text>
                    </CardBody>
                    <CardFooter>
                      {/* <RiDeleteBin6Line size={22}/> */}
                        <Button onClick={(e) => remove(item._id)} variant="solid" colorScheme="blue">
                            Excluir
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </Box>
    )
}
