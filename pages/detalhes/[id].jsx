import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/header"
import { CartContext } from "../../context/cartContext"
import { Avaliacao } from "../../components/avalicaoes"

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
    productDetalhe()
    // useEffect(() => {
    //     productDetalhe()
    // }, [id])

    return (
        <>
            <Header />
            <Box display={'flex'} justifyContent='center'>
                <Card
                    direction={{ base: 'column', md: 'row'}}
                    overflow='hidden'
                    variant='outline'
                    w={'90%'}
                    mt={10}
                    p={5}
                >
                    <Box>
                        <Flex justifyContent={'center'}>
                            <Image
                                objectFit='cover'
                                maxW={'250px'}
                                height={'auto'}
                                src={product?.img}
                                alt='Caffe Latte'
                            />
                       </Flex>
                    </Box>
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
                            <Button onClick={() => addProductCart(product._id)} p={2} color={'white'} variant='unstyled' bg='#FF5C01'>
                                Adicionar ao carrinho
                            </Button>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
            <Box padding={10}>
                <Avaliacao comments={product?.comments} />
            </Box>
        </>
    )
}