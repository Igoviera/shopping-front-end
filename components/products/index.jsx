import { Box, Button, Card, CardBody, Flex, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AiFillLike } from 'react-icons/ai';

export function Products({ id, img, name, description, price }) {
    const { addProductCart } = useContext(CartContext)

    return (
        <Card h='520px'>
            <Flex alignItems={'center'} justifyContent={'end'} gap={2} cursor={'pointer'} p={3}>
                <Text color={'#888888'}>0</Text>
                <AiFillLike size={'20px'} color="#FF5C01" />
            </Flex>
            <CardBody display={'flex'} flexDirection={'column'} justifyContent='center'>
                <Box display={'flex'} justifyContent={'center'}>
                    <Image
                        src={img}
                        alt='Green double couch with wooden legs'
                        maxW={200}
                        maxH={200}
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='sm'>{name}</Heading>
                    <Text fontWeight={'semibold'}  fontSize='3xl'>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
                    </Text>
                </Stack>
            </CardBody>
            <Flex justifyContent={'center'} mb={5} gap={2}>
                <Button onClick={() => addProductCart(id)}  
                     bg='#FF5C01' color={'white'} variant='unstyled' w={'45%'}>
                    Comprar
                </Button>
                <Button variant='unstyled' bg='none' border={'solid 1px orange'} w={'45%'}>
                    <Link href={`/detalhes/${id}`}>
                        <Text color={'#FF5C01'}>Detalhes</Text>
                    </Link>
                </Button>
            </Flex>
        </Card>
    )
}