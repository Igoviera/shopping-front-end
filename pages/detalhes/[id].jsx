import { Box, Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/header"
import { CartContext } from "../../context/cartContext"

export default function Detalhes() {
    const [product, serProdutc] = useState()
    const router = useRouter()
    const { id } = router.query

    const { addProductCart } = useContext(CartContext)

    const productDetalhe = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/products/id/${id}`)
            serProdutc(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        productDetalhe()
    }, [id])

    return (
        <>
            <Header />
            <Box display={'flex'} justifyContent='center'>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    maxW={800}
                    mt={10}
                    p={5}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '90%', sm: '200px' }}
                        src={product?.img}
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{product?.name}</Heading>
                            <Text py='2'>
                                {product?.description}
                            </Text>
                            <Text color='green.400' fontWeight={'semibold'} fontSize='2xl'>
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product?.price)}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={() => addProductCart(product._id)} variant='solid' colorScheme='blue'>
                                Adicionar ao carrinho
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
        </>
    )
}