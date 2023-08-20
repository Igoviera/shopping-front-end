import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/header'
import { CartContext } from '../../context/cartContext'
import { Avaliacao } from '../../components/avalicaoes'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface Product {
    _id: string
    name: string
    description: string
    price: number
    img: string
    comments: Comment[]
}

export interface Comment {
    _id: string
    text: string
    createdAt: string
    user: {
        _id: string
        name: string
        email: string
    }
}

export default function Detalhes() {
    const [product, serProdutc] = useState<Product>()
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
            <Box margin={'0 auto'} maxW={'95%'}>
                <Box display={'flex'} justifyContent="center">
                    <Card
                        direction={{ base: 'column', md: 'row' }}
                        overflow="hidden"
                        variant="outline"
                        mt={10}
                        gap={10}
                        p={5}
                    >
                        <Box>
                            <Flex justifyContent={'center'}>
                                <Box border={'1px solid red'}>
                                    +++
                                </Box>
                                <Box>
                                    <Image
                                        // _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                                        objectFit="cover"
                                        maxW={'250px'}
                                        height={'auto'}
                                        src={product?.img}
                                        alt="Caffe Latte"
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Stack>
                            <CardBody>
                                <Heading size="md">{product?.name}</Heading>
                                <Text py="2">{product?.description}</Text>
                                <Flex> <AiFillStar/> <Text color={'gray.600'}>150 Avaliações de clientes</Text></Flex>
                                <Text fontWeight={'semibold'} fontSize="3xl">
                                    {product?.price &&
                                        new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(product?.price)}
                                </Text>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    onClick={() => product && addProductCart(product._id)}
                                    p={2}
                                    color={'white'}
                                    variant="unstyled"
                                    transition={'0.5s'}
                                    _hover={{ bg: '#e45000' }}
                                    bg="#FF5C01"
                                >
                                    Adicionar ao carrinho
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
                <Box mt={10}>
                    <Avaliacao product={product} />
                </Box>
            </Box>
        </>
    )
}
