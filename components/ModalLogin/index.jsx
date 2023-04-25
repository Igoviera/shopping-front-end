import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    Text,
    Flex
} from '@chakra-ui/react'

export function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Text cursor={'pointer'} color={'black'} onClick={onOpen}>Login</Text>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='string' placeholder='Digite seu e-mail' />
                            <FormLabel mt={5}>Senha</FormLabel>
                            <Input type='password' placeholder='Digite sua senha' />
                        </FormControl>
                        <Flex justifyContent={'end'}>
                            <Text fontSize={'13px'}>Ainda não tem conta? Cadastre-se</Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' >Entrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}