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
    transition,
    useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { AiFillStar } from 'react-icons/ai'
import { Product } from '../../types/produtc'
import { MyButton } from '../button'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { ModalProduct } from './modalProduct'

interface ProductsProps {
    product: Product
}

export function Products({ product }: ProductsProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addProductCart } = useContext(CartContext)

    return (
        <Card h="450px">
            <Box display={'flex'} flexDirection={'column'} justifyContent="center" p={5}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Link href={`/detalhes/${product._id}`}>
                        <Box bg="red.300" margin={'0 auto'}>
                            <Image
                                _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                                src={product.img}
                                alt="Green double couch with wooden legs"
                                maxW={200}
                                maxH={200}
                            />
                        </Box>
                    </Link>
                    <Box display={'flex'} flexDirection={'column'} gap={5}>
                        <AiOutlineHeart cursor="pointer" size={25} color="#9aa0a6" />
                        <AiOutlineEye onClick={onOpen} cursor="pointer" size={25} color="#9aa0a6" />
                        <ModalProduct isOpen={isOpen} onOpen={onOpen} onClose={onClose} product={product}/>
                        <BsCart3 cursor="pointer" size={25} color="#9aa0a6" />
                    </Box>
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
            </Box>
        </Card>
    )
}
