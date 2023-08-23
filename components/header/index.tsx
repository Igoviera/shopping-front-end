import { Flex, Image, MenuButton, Text, Menu, Button, HStack, MenuList, MenuItem } from '@chakra-ui/react'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Search } from './searchProduct'
import { signOut, useSession } from 'next-auth/react'
import { IoMdArrowDropdown } from 'react-icons/io'

export function Header() {
    const { user } = useContext(CartContext)

    const userProducts = user?.cart.flatMap((item: any) => {
        return item.product.map((item: any) => {
            return item
        })
    })

    const { data: session } = useSession()

    return (
        <Flex
            bg={'#FF5C01'}
            color={'white'}
            boxShadow="base"
            h="80px"
            justifyContent={'space-between'}
            alignItems="center"
            p={5}
        >
            <Link href={'/'}>
                {/* <Image maxW={'70px'} src="logo01.png" /> */}
                <Text fontFamily={'cursive'} fontSize={'2xl'} fontWeight={'black'}>
                    Online Shop
                </Text>
            </Link>
            <Flex w={'50%'} display={['none', 'none', 'block']}>
                <Search />
            </Flex>
            <Flex gap={10}>
                <Flex alignItems={'center'} gap={2}>
                    {session && (
                        <Menu>
                            <MenuButton transition="all 0.2s" color={'black'}>
                                <HStack>
                                    <Text fontWeight={'semibold'} color={'white'}>
                                        Olá, {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)}{' '}
                                    </Text>
                                    <IoMdArrowDropdown color='white'/>
                                </HStack>
                            </MenuButton>
                            <MenuList color="black" >
                                <MenuItem onClick={() => signOut()}>Sair</MenuItem>
                                <MenuItem >
                                    <Link href={'/carrinho'}>Meus produtos</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                    <Text
                        color={'white'}
                        cursor={'pointer'}
                    >
                        {!session && <Link href={'/login'}>Login</Link>}
                        {/* {session && <Text onClick={() => signOut()}>Sair</Text>} */}
                    </Text>
                </Flex>
                <Link href={'/carrinho'}>
                    {userProducts?.length > 0 ? (
                        <Flex
                            position={'absolute'}
                            bg="orange.700"
                            borderRadius={'50%'}
                            justifyContent="center"
                            alignItems='center'
                            w={6}
                            h={6}
                            top="15px"
                            right={10}
                            fontSize={15}
                            fontWeight="semibold"
                        >
                            {userProducts?.length}
                        </Flex>
                    ) : null}
                    <Image src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-basket.png"></Image>
                </Link>
            </Flex>
        </Flex>
    )
}
