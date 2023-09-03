import { Box, Input, Text } from '@chakra-ui/react'

export const Profile = () => {
    return (
        <Box bg={'white'} flex={'1'} p={5}>
            <Box display={'flex'}>
                <Box w={'full'} mr={5}>
                    <Text>Nome</Text>
                    <Input placeholder="Nome" />
                </Box>
                <Box w={'full'}>
                    <Text>Telefone</Text>
                    <Input placeholder="Telefone" />
                </Box>
            </Box>
            <Box display={'flex'} mt={5}>
                <Box w={'full'} mr={5}>
                    <Text>Estado</Text>
                    <Input placeholder="Estado" />
                </Box>
                <Box w={'full'}>
                    <Text>Cidade</Text>
                    <Input placeholder="Cidade" />
                </Box>
            </Box>
            <Box display={'flex'} mt={5}>
                <Box w={'full'} mr={5}>
                    <Text>Rua</Text>
                    <Input placeholder="Rua" />
                </Box>
                <Box w={'full'}>
                    <Text>N°</Text>
                    <Input placeholder="N°" />
                </Box>
            </Box>
        </Box>
    )
}
