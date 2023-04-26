import { Box, Button, Flex, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export function Avaliacao({comments}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Flex justifyContent={'space-between'}>
                <Heading>Avaliação dos Clientes</Heading>
                <Button p={2} color={'white'} variant='unstyled' bg='#FF5C01' onClick={onOpen}>Escreva uma avaliação</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Escreve seu comentario</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Igo vieira</Text>
                            <Textarea mt={5}>

                            </Textarea>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" >Enviar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Flex>

            <Box mt={5} p={2} border={'solid 1px #e4e4e4'} borderRadius={5}>
                <HStack>
                    <Text fontWeight={'semibold'}>
                        Luiz Carlos Dias -
                    </Text>
                    <Text color={'#6e6e6e'}>
                        Há cerca de 16 horas
                    </Text>
                </HStack>
                <Text>
                   {comments}
                </Text>
            </Box>

        </Box>
    )
}