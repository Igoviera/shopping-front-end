import { Flex } from '@chakra-ui/react'
import { ProductCart } from '../components/Cart'
import { CardTotal } from '../components/Cart/cardTotal'

import { Header } from '../components/header'

// import { getSession } from "next-auth/react";

export default function CartPage() {
  return (
    <>
      <Header />
      <Flex m={10} gap={'16px'} flexWrap={['wrap', 'wrap', 'nowrap']}>
        <ProductCart />
        <CardTotal />
      </Flex>
    </>
  )
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context)

//     if(!session) {
//         return {
//             redirect:{
//                 destination: '/login',
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//           user: session.user,
//         },
//       };

// }
