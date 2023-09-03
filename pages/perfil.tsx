import { Box, Input, Text } from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { Orders } from '../components/orders'
import { Profile } from '../components/profile'
import { useState } from 'react'
import { BiXCircle } from 'react-icons/bi'

export default function Perfil() {
    const [activeTab, setActiveTab] = useState('perfil')

    return (
        <Box display={'flex'} gap={2}>
            <Box bg={'white'} p={5}>
                <Box
                    onClick={() => setActiveTab('perfil')}
                    display={'flex'}
                    alignItems={'center'}
                    gap={2}
                    cursor={'pointer'}
                >
                    <BiUser color={activeTab === 'perfil' ? '#FF5C01' : 'black'} />
                    <Text color={activeTab === 'perfil' ? '#FF5C01' : 'black'}>Perfil</Text>
                </Box>
                <Box
                    onClick={() => setActiveTab('pedidos')}
                    display={'flex'}
                    alignItems={'center'}
                    gap={2}
                    cursor={'pointer'}
                    mt={5}
                >
                    <HiOutlineShoppingBag color={activeTab === 'pedidos' ? '#FF5C01' : 'black'} />
                    <Text color={activeTab === 'pedidos' ? '#FF5C01' : 'black'}>Perdidos</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} mt={5}>
                    <BiXCircle />
                    <Text>Sair</Text>
                </Box>
            </Box>
            {activeTab === 'perfil' && <Profile />}
            {activeTab === 'pedidos' && <Orders />}
        </Box>
    )
}
