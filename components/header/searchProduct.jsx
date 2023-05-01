import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Box, Container, Input } from "@chakra-ui/react"

export function Search() {
    const { reqProduct } = useContext(CartContext)

    return (
        <Input
            onChange={(e) => reqProduct(e.target.value)}
            bg={'white'}
            boxShadow='base' rounded='md'
            color='black'
            maxW={'100%'}
            placeholder="Buscar..."
        />
    )
}