import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Img, Text } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { Product } from '../../types/produtc';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {BsCart3} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai'

export function ProductCart() {
    const { user, remove } = useContext(CartContext);
    const [amount, setAmount] = useState(0);
  

    const increase = () => {
        setAmount(amount + 1)
    }

    const reduce = () => {
        if(amount > 0){
            setAmount(amount - 1)
        }
        
    }

    const userProducts = user?.cart.flatMap((item: any) => {
        return item.product.map((product: any) => {
            return product
        })
    })

    return (
        <Box>
            {userProducts && (
                <Flex alignItems={'center'} gap={5}>
                    <BsCart3 color='#ff5c01' size={30} /> <Text fontSize={'2xl'} fontWeight={'bold'}>Meu carrinho</Text> 
                </Flex>
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
                        <Box display={'flex'} alignItems={'center'} gap={3}>
                            <Box onClick={reduce} fontWeight={'bold'} color={'white'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#ff5c01'} w={7} h={7} borderRadius={'full'}>
                                -
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={10} h={10} p={2} borderRadius={'md'} border={'1px solid #ff5c01'}>
                               {amount} 
                            </Box>
                                
                            <Box onClick={increase} fontWeight={'bold'} color={'white'} cursor={'pointer'} display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#ff5c01'} w={7} h={7} borderRadius={'full'}>
                                +
                            </Box>    
                        </Box>
                    </CardBody>
                    <CardFooter>
                      {/* <RiDeleteBin6Line size={22}/> */}
                        <Box cursor={'pointer'} onClick={(e) => remove(item._id)}>
                            <AiFillCloseCircle size={25} />
                        </Box>
                    </CardFooter>
                </Card>
            ))}
        </Box>
    )
}
