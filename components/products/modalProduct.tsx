import {
    Box,
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    UseDisclosureReturn,
    useDisclosure
} from '@chakra-ui/react'
import { MyButton } from '../button'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

interface ModalProductProps {
    isOpen: UseDisclosureReturn['isOpen']
    onOpen: UseDisclosureReturn['onOpen']
    onClose: UseDisclosureReturn['onClose']
}

export const ModalProduct = ({ isOpen, onOpen, onClose, product }) => {
    const { addProductCart } = useContext(CartContext)

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody display={{ base: 'block', md: 'flex' }} gap={5} p={10}>
                    <Box>
                        <Image
                            _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                            src={product.img}
                            alt="Green double couch with wooden legs"
                            maxW={{ base: '100%', md: 200 }}
                            maxH={{ base: 'auto', md: 200 }}
                        />
                    </Box>
                    <Box>{product.description}</Box>
                </ModalBody>

                <ModalFooter>
                    {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button> */}
                    
                    <MyButton onclick={() => addProductCart(product)} label='Adicionar no carrinho' w='250px'/>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
