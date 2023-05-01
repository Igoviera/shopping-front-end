import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { Products } from ".";
import { CartContext } from "../../context/cartContext";

export function Allproduct() {
    const { allProducts } = useContext(CartContext)

    return (
        <>
            {allProducts?.map((product) => (
                <Box key={product._id} >
                    <Products
                        id={product._id}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                </Box>
            ))}
        </>
    )
}