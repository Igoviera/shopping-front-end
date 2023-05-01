import { Box, Container, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ImUser } from "react-icons/im";
import { Search } from "./searchProduct";

export function Header() {
    const { allProductsCart, reqProduct } = useContext(CartContext)

    return (
        <Flex
            bg={'white'}
            color={'white'}
            boxShadow='base'
            rounded='md' h='80px'
            justifyContent={'space-between'}
            alignItems='center'
            p={5}>
            <Link href={'/'}>
                <Image maxW={'70px'} src="logo01.png" />
            </Link>
            <Flex w={'50%'} display={['none', 'none', 'block']}>
                <Search />
            </Flex>
            <Flex gap={10}>
                <Flex alignItems={'center'} gap={2}>
                    <ImUser color="black" />
                    <Text color={'black'} cursor={'pointer'}>
                        <Link href={'/login'}>
                            Login
                        </Link>
                    </Text>
                </Flex>
                <Link href={'/carrinho'}>
                    {allProductsCart?.product?.length > 0 ?
                        <Flex
                            position={'absolute'}
                            bg='#02df1f' borderRadius={'50%'}
                            justifyContent='center'
                            w={7}
                            h={7}
                            top='15px'
                            right={10}
                            fontSize={20}
                            fontWeight='semibold'>
                            {allProductsCart?.product?.length}
                        </Flex>
                        :
                        null
                    }

                    <Image src="https://img.icons8.com/ios-glyphs/30/F4650F/shopping-basket.png"></Image>
                </Link>
            </Flex>

        </Flex>
    )
}