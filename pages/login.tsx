import { Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

const schema = yup
    .object({
        email: yup.string().required('O e-mail é obrigatorio'),
        password: yup.string().required('A senha é obrigatoria')
    })
    .required()

type FormData = yup.InferType<typeof schema>

export default function Login() {
    const [hasError, setHasError] = useState(false)

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (credentials: FormData) => {
        setHasError(false)
        const { email, password } = credentials
        const request = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        if (request && request.ok) {
            router.push('/')
        } else {
            setHasError(true)
        }
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container mt={30} boxShadow="md" p="10" rounded="md" bg="white" borderRadius={10} maxW="lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Text>Email</Text>
                    <Input
                        mt={3}
                        focusBorderColor="#FF5C01"
                        placeholder="Digite seu e-mail"
                        type="text"
                        {...register('email', { required: true })}
                    />
                    <Text color={'red'} fontSize={16}>
                        {errors.email?.message}
                    </Text>
                    <Text mt="2rem">Senha</Text>
                    <Input
                        mt={3}
                        focusBorderColor="#FF5C01"
                        placeholder="Digite sua senha"
                        type="password"
                        {...register('password', { required: true })}
                    />
                    <Text color={'red'} fontSize={16}>
                        {errors.password?.message}
                    </Text>
                    <Flex justifyContent={'end'} mt={2}>
                        <Text fontSize={'13px'} cursor={'pointer'}>
                            Não conta? cadastre-se
                        </Text>
                    </Flex>
                    <Button
                        type="submit"
                        variant="unstyled"
                        bg="#FF5C01"
                        color={'white'}
                        mt={'2rem'}
                        w={'100%'}
                    >
                        Entrar
                    </Button>
                </form>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions)

    if (!session) {
        return {
            props: {}
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: false
        }
    }
}
