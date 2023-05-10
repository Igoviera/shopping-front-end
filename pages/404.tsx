import { Box, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>404 | Not Found</title>
            </Head>
            <Box
                w={'100vw'}
                h={'100vh'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Heading>404</Heading>
                <Box mb={10}>
                    <Text>Oops, não conseguimos encontrar essa página!</Text>
                    <Text>Clique no Link abaixo para ser redirecionado à Página Inicial</Text>
                </Box>
                <Link href={'/'}>Ir para a Págia Inicial</Link>
            </Box>
        </>
    )
}
