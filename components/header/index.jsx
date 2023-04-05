import { Flex, Image, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function Header() {
    const { allProductsCart, reqProduct } = useContext(CartContext)

    return (
        <Flex color={'white'} boxShadow='base' rounded='md' h='80px' justifyContent={'space-between'} alignItems='center' p={5}>
            <Link href={'/'}>
                <Image maxW={'70px'} src="logo01.png" />
            </Link>
            <Input onChange={(e) => reqProduct(e.target.value)} boxShadow='base' rounded='md' color='black' maxW={'50%'} placeholder="Buscar..." />
            <Link href={'/carrinho'}>
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
                <Image src="https://img.icons8.com/ios-glyphs/30/F4650F/shopping-basket.png"></Image>
            </Link>
        </Flex>
    )
}