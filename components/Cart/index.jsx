import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function ProductCart() {
    const { allProductsCart, remove } = useContext(CartContext)

    return (
        <Box>
            {allProductsCart?.product.map((item, index) => (
                <Card
                    mt={'16px'}
                    pt={'16px'}
                    key={`${item._id}${index}`}
                    direction={{ base: 'column', md: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    alignItems={'center'}
                >

                    <Image
                        marginLeft={5}
                        objectFit='cover'
                        maxW={'90px'}
                        maxH={'90px'}
                        src={item.img}
                        alt='Caffe Latte'
                    />

                    <CardBody>
                        <Heading size='md'>{item.name}</Heading>
                        <Heading color={'green.400'} size='md'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}</Heading>
                        <Text py='2'>
                            {item.description}
                        </Text>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={(e) => remove(item._id)} variant='solid' colorScheme='blue'>
                            Remover
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </Box>
    )
}