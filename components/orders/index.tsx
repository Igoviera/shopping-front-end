import { Box, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

export const Orders = () => {
    return (
        <TableContainer bg={'white'} w={'full'}>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Produto ID</Th>
                        <Th>Statu</Th>
                        <Th>Qtd</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>545465212</Td>
                        <Td>Aprovado</Td>
                        <Td>5</Td>
                        <Td>250</Td>
                    </Tr>
                    <Tr>
                        <Td>124297252</Td>
                        <Td>Pendente</Td>
                        <Td>3</Td>
                        <Td>150</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
