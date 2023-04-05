import { Flex } from "@chakra-ui/react";
import { ProductCart } from "../components/Cart";
import { CardTotal } from "../components/Cart/cardTotal";

import { Header } from "../components/header";

export default function CartPage() {
    return (
        <>
            <Header />
            <Flex m={10} gap={'16px'}  flexWrap={['wrap','wrap','nowrap']}>
                <ProductCart />
                <CardTotal />
            </Flex>
        </>
    )
}