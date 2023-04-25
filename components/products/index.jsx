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
                <AiFillLike size={'20px'} color="#228beecc" />      
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
                    <Heading size='md'>{name}</Heading>
                    <Text color='green.400' fontWeight={'semibold'} fontSize='2xl'>
                        R$ {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}
                    </Text>
                </Stack>
            </CardBody>
            <Flex justifyContent={'center'} mb={5} gap={2}>
                <Button onClick={() => addProductCart(id)
                } variant='solid' colorScheme='blue' w={'45%'}>
                    Comprar
                </Button>
                <Button bg='none' border={'solid 1px #2d88f0'} w={'45%'}>
                    <Link href={`/detalhes/${id}`}>
                        <Text color={'blue.400'}>Detalhes</Text>
                    </Link>
                </Button>
            </Flex>
        </Card>
    )
}