import {
    Box,
    Button,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Stack,
    Text
} from '@chakra-ui/react'
import { ImUser } from 'react-icons/im'
import { FaTruck } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'
import { Header } from '../components/header'
import Head from 'next/head'

export default function Checkout() {
    return (
        <>
            <Head>
                <title>checkout</title>
            </Head>
            <main>
                <Flex>
                    <FormControl w={'80%'} isRequired m={10}>
                        <HStack>
                            <ImUser size={23} />
                            <Text fontSize={'1.5rem'}> Dados pessoais</Text>
                        </HStack>
                        <HStack mt={5}>
                            <Box w={'100%'}>
                                <FormLabel>Nome</FormLabel>
                                <Input focusBorderColor="#FF5C01" placeholder="Nome" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>E-mail</FormLabel>
                                <Input focusBorderColor="#FF5C01" placeholder="E-mail" />
                            </Box>
                        </HStack>
                        <HStack mt={5}>
                            <FaTruck size={23} />
                            <Text fontSize={'1.5rem'}> Endereço da entrega</Text>
                        </HStack>
                        <HStack mt={5}>
                            <Box w={'100%'}>
                                <FormLabel>CEP</FormLabel>
                                <Input focusBorderColor="#FF5C01" placeholder="CEP" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>Endereço</FormLabel>
                                <Input  focusBorderColor="#FF5C01" placeholder="Endereço" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>°N</FormLabel>
                                <Input maxW={'90px'} placeholder="°N" />
                            </Box>
                        </HStack>
                        <HStack mt={5}>
                            <Box w={'100%'}>
                                <FormLabel>Cidade</FormLabel>
                                <Input  focusBorderColor="#FF5C01" placeholder="Cidade" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>UF</FormLabel>
                                <Input  focusBorderColor="#FF5C01" maxW={'90px'} placeholder="UF" />
                            </Box>
                        </HStack>
                        <HStack mt={5}>
                            <BsCreditCardFill size={23} />
                            <Text fontSize={'1.5rem'}>Pagamento</Text>
                        </HStack>
                        <HStack mt={5}>
                            <Box w={'100%'}>
                                <FormLabel>Numero do cartão</FormLabel>
                                <Input focusBorderColor="#FF5C01" placeholder="Numero do cartão" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>Nome do titular</FormLabel>
                                <Input focusBorderColor="#FF5C01" placeholder="Nome" />
                            </Box>
                        </HStack>
                        <HStack mt={5}>
                            <Box w={'100%'}>
                                <FormLabel>Data</FormLabel>
                                <Input focusBorderColor="#FF5C01" type="Date" placeholder="MM/AA" />
                            </Box>
                            <Box w={'100%'}>
                                <FormLabel>CVV</FormLabel>
                                <Input focusBorderColor="#FF5C01" maxW={'90px'} placeholder="CVV" />
                            </Box>
                        </HStack>
                        <Divider mt={10} />
                        <Flex justifyContent={'end'} mt={5}>
                            <Button colorScheme="green" w={'200px'}>
                                Finalizar
                            </Button>
                        </Flex>
                    </FormControl>

                    <Stack w={'20%'} bg="#fd7536" color={'white'} p={5}>
                        <Text>Carrinho</Text>
                        <Flex justifyContent={'space-between'}>
                            <Text>Entrega:</Text>
                            <Text>20/10/2023</Text>
                        </Flex>
                        <Flex justifyContent={'space-between'}>
                            <Text>Total: </Text>
                            <Text>R$ 200</Text>
                        </Flex>
                    </Stack>
                </Flex>
            </main>
        </>
    )
}
