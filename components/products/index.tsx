import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    transition
} from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { AiFillStar } from 'react-icons/ai'
import { Product } from '../../types/produtc'
import { MyButton } from '../button'

interface ProductsProps {
    product: Product
}

export function Products({ product }: ProductsProps) {
    const { addProductCart } = useContext(CartContext)

    return (
        <Link href={`/detalhes/${product._id}`}>
            <Card h="450px">
                {/* <Flex alignItems={'center'} justifyContent={'end'} gap={2} cursor={'pointer'} p={3}>
                <Text color={'#888888'}>0</Text>
                <AiFillLike size={'20px'} color="#FF5C01" />
            </Flex> */}
                <CardBody display={'flex'} flexDirection={'column'} justifyContent="center">
                    <Box display={'flex'} justifyContent={'center'}>
                        <Image
                            _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                            src={product.img}
                            alt="Green double couch with wooden legs"
                            maxW={200}
                            maxH={200}
                        />
                    </Box>
                    <Stack mt="6">
                        <Text size="sm">{product.name}</Text>
                        <Box display={'flex'} alignItems={'center'} gap={2}>
                            <AiFillStar color="orange" size={20} />
                            <Text color={''}>20 avaliações</Text>
                        </Box>

                        <Text fontWeight={'semibold'} fontSize="3xl">
                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                                product.price
                            )}
                        </Text>
                    </Stack>
                </CardBody>

            </Card>
        </Link>
    )
}
