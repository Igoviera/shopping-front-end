import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import {FaInstagram} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai'
import Link from 'next/link';

export const Footer = () => {
    return (
        <>
            <Box  bg={'white'} p={10}>
                <Flex>
                    <Box display={'flex'} flexDirection={'column'}>
                        <Text fontWeight={'bold'}>Empresa</Text>
                        <Link href={'#'}>Contate-nos</Link>
                        <Link href={'#'}>Empresa</Link>
                    </Box>
                </Flex>
                <Divider mt={5} mb={5}/>
                <Flex justifyContent={'space-between'}>
                    <Text>&copy; 2023 Online Shop.</Text>
                    <Flex gap={5}>
                        <Box bg={'gray.200'} p={2} borderRadius={'full'} cursor={'pointer'}>
                           <AiFillYoutube size={25}/> 
                        </Box>
                        <Box bg={'gray.200'} p={2} borderRadius={'full'} cursor={'pointer'}>
                           <FaInstagram size={25}/>  
                        </Box>
                                           
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
