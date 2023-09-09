import {
    Box,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { ImUser } from 'react-icons/im'
import { FaTruck } from 'react-icons/fa'
import { BsCreditCardFill } from 'react-icons/bs'
import { Header } from '../components/header'
import { BiMenu } from 'react-icons/bi'
import Head from 'next/head'
import { useContext, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CartContext } from '../context/cartContext'
import { Checkout } from '../types/checkout'

const schema = yup
    .object({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().required('O e-mail é obrigatório'),
        cep: yup.string().required('O CEP é obrigatório'),
        adress: yup.string().required('A rua é obrigatoria'),
        city: yup.string().required('A cidade é obrigatória'),
        uf: yup.string().required('O UF é obrigatório'),
        numberCard: yup.string().required('O numero do cartão é obrigatória'),
        nameCard: yup.string().required('A nome do dono do cartão é obrigatório'),
        cvv: yup.string().required('O código de segurançã é obrigatório'),
        n: yup.string().required('A numero da casa é obrigatório'),
        date: yup.string().required('A data de validade é obrigatória')
    })
    .required()

export default function ProductCheckout() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Checkout>({
        resolver: yupResolver(schema)
    })

    const { productCheckout } = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isCheckout, setIsCheckout] = useState(false)

    const onSubmit = (data: Checkout) => {
        productCheckout(data)
        setIsCheckout(true)
    }

    return (
        <>
            <Head>
                <title>checkout</title>
            </Head>
            <main>
                {isCheckout ? (
                    <Box
                        display={'flex'}
                        h={'100vh'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image w={150} src="check.png" />
                        <Text color={'#31af91'} fontWeight={'semibold'} fontSize={'2xl'}>
                            Pedido realizado com sucesso!
                        </Text>
                    </Box>
                ) : (
                    <Box height={'100vh'} pl={5} display={'flex'}>
                        <Box w={'100%'}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <HStack>
                                    <ImUser size={23} />
                                    <Text fontSize={'1.5rem'}> Dados pessoais</Text>
                                </HStack>
                                <HStack
                                    mt={5}
                                    display={'flex'}
                                    flexWrap={['wrap', 'nowrap']}
                                    alignItems={['flex-start', 'center']}
                                >
                                    <Box w={'100%'}>
                                        <FormLabel>Nome</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="Nome"
                                            {...register('name')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.name?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>E-mail</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="E-mail"
                                            {...register('email')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.email?.message}
                                        </Text>
                                    </Box>
                                </HStack>
                                <HStack mt={5}>
                                    <FaTruck size={23} />
                                    <Text fontSize={'1.5rem'}> Endereço da entrega</Text>
                                </HStack>

                                <HStack
                                    mt={5}
                                    display={'flex'}
                                    flexWrap={['wrap', 'nowrap']}
                                    alignItems={['flex-start', 'center']}
                                >
                                    <Box w={'100%'}>
                                        <FormLabel>CEP</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="CEP"
                                            {...register('cep')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.cep?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>Endereço</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="Endereço"
                                            {...register('adress')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.adress?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>°N</FormLabel>
                                        <Input maxW={'90px'} placeholder="N°" {...register('n')} />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.n?.message}
                                        </Text>
                                    </Box>
                                </HStack>
                                <HStack mt={5}>
                                    <Box w={'100%'}>
                                        <FormLabel>Cidade</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="Cidade"
                                            {...register('city')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.city?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>UF</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            maxW={'90px'}
                                            placeholder="UF"
                                            {...register('uf')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.uf?.message}
                                        </Text>
                                    </Box>
                                </HStack>
                                <HStack mt={5}>
                                    <BsCreditCardFill size={23} />
                                    <Text fontSize={'1.5rem'}>Pagamento</Text>
                                </HStack>
                                <HStack
                                    mt={5}
                                    display={'flex'}
                                    flexWrap={['wrap', 'nowrap']}
                                    alignItems={['flex-start', 'center']}
                                >
                                    <Box w={'100%'}>
                                        <FormLabel>Numero do cartão</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="Numero do cartão"
                                            {...register('numberCard')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.numberCard?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>Nome do titular</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            placeholder="Nome"
                                            {...register('nameCard')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.nameCard?.message}
                                        </Text>
                                    </Box>
                                </HStack>
                                <HStack mt={5}>
                                    <Box w={'100%'}>
                                        <FormLabel>Data</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            type="Date"
                                            placeholder="MM/AA"
                                            {...register('date')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.date?.message}
                                        </Text>
                                    </Box>
                                    <Box w={'100%'}>
                                        <FormLabel>CVV</FormLabel>
                                        <Input
                                            focusBorderColor="#FF5C01"
                                            maxW={'90px'}
                                            placeholder="CVV"
                                            {...register('cvv')}
                                        />
                                        <Text color={'red'} fontSize={'14px'}>
                                            {errors.cvv?.message}
                                        </Text>
                                    </Box>
                                </HStack>
                                <Divider mt={10} />
                                <Flex justifyContent={'end'} mt={5}>
                                    <Button
                                        type="submit"
                                        bg="#FF5C01"
                                        w={'100px'}
                                        color={'white'}
                                        variant="unstyled"
                                    >
                                        Finalizar
                                    </Button>
                                </Flex>
                            </form>
                        </Box>
                        <Box position={'relative'}>
                            <Box onClick={onOpen} p={5}>
                                <BiMenu size={30} cursor={'pointer'} />
                            </Box>
                            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader>Create your account</DrawerHeader>

                                    <DrawerBody>
                                        <Input placeholder="Type here..." />
                                    </DrawerBody>

                                    <DrawerFooter>
                                        <Button variant="outline" mr={3} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme="blue">Save</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </Box>
                )}
            </main>
        </>
    )
}
