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


interface ModalProductProps {
    isOpen: UseDisclosureReturn['isOpen']
    onOpen: UseDisclosureReturn['onOpen']
    onClose: UseDisclosureReturn['onClose']
}

export const ModalProduct = ({ isOpen, onOpen, onClose, product }) => {
    return (
   

        <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody display={'flex'} gap={5} p={10}>
                    <Box>
                        <Image
                            _hover={{ transform: 'scale(1.1)', transition: '0.5s' }}
                            src={product.img}
                            alt="Green double couch with wooden legs"
                            maxW={200}
                            maxH={200}
                        />
                    </Box>
                    <Box>
                      {product.description}
                    </Box>
                    
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
   
        
    )
}
