import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Textarea
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/cartContext'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../../services/api'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Comment } from '../../types/comment'
import { Product } from '../../types/produtc'


const schema = yup
    .object({
        text: yup.string().required('O comentario é obrigatorio')
    })
    .required()

type FormData = yup.InferType<typeof schema>

export function Avaliacao(product: Product) {
    const { data: session } = useSession()
    const { user } = useContext(CartContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rating, setRating] = useState(5)

    const handleRatingClick = (star: number) => {
        setRating(star)
    }

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (comment: FormData) => {
        const data = { text: comment.text, star: rating }

        if (!session) {
            router.push('/login')
            return
        }
        try {
            await api.post(`/commet/producId/${product._id}/userId/${user?._id}`, data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box bg={'white'} p={8} borderRadius={10}>
            <Flex justifyContent={'space-between'}>
                <Heading fontSize={['md', 'lg', 'xl']}>Avaliação dos Clientes</Heading>
                <Button p={2} color={'white'} variant="unstyled" bg="#FF5C01" onClick={onOpen}>
                    Escreva uma avaliação
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ModalHeader>Avalie este produto</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Text>Olá, {user?.name}</Text>
                                <Flex gap={3} mt={5}>
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <Box key={index} onClick={() => handleRatingClick(star)}>
                                            {star <= rating ? (
                                                <AiFillStar
                                                    fontSize={25}
                                                    cursor={'pointer'}
                                                    color="#FF5C01"
                                                />
                                            ) : (
                                                <AiOutlineStar
                                                    fontSize={25}
                                                    cursor={'pointer'}
                                                    color="#ccc"
                                                />
                                            )}
                                        </Box>
                                    ))}
                                </Flex>
                                <Textarea
                                    resize={'none'}
                                    placeholder="Digite seu comentário..."
                                    focusBorderColor="#FF5C01"
                                    mt={5}
                                    {...register('text', { required: true })}
                                />
                                <Text color={'red'} fontSize={16}>
                                    {errors.text?.message}
                                </Text>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    p={2}
                                    color={'white'}
                                    variant="unstyled"
                                    bg="#FF5C01"
                                    type="submit"
                                    colorScheme="blue"
                                >
                                    Enviar
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </Flex>
            <Box mt={5}>
                <Text>{product?.comments?.length} comentários pra esse produto</Text>
                {product?.comments?.map((comment) => (
                    <Box key={comment._id} mt={5} borderRadius={10} border={'solid 1px #e4e4e4'}>
                        <Text m={5} mt={5}>
                            {comment.text}
                        </Text>
                        <HStack m={5} color={'#6e6e6e'}>
                            <Text>
                                {comment?.user.name.charAt(0).toUpperCase() + comment?.user.name.slice(1)} -
                            </Text>
                            <Text>
                                {new Date(comment.createdAt).toLocaleDateString('pt-br', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </Text>
                        </HStack>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
