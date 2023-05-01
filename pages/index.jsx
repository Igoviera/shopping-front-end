import { Box, Center, Flex, Heading, Img, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FilterBuscar } from "../components/filterBuscar/inde";
import { Header } from "../components/header";
import { Products } from "../components/products";
import { Allproduct } from "../components/products/product";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { loading } = useContext(CartContext)
  const { data: session } = useSession()
  return (
    <Box>
      <Header />
      <FilterBuscar />
      <Img src="/banner2.png" />
      {loading ?
        <Center mt={10}>
          <Spinner color='blue.500' size='xl' thickness='3px' />
        </Center>
        :
        <SimpleGrid p={8} spacing={4} templateColumns='repeat(auto-fill, minmax(290px, 1fr))'>
          <Allproduct />
        </SimpleGrid>
      }
    </Box>
  )
}
