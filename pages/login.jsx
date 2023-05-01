import { Box, Button, Container, Flex, FormControl, Input, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from "react";
import Link from "next/link";

const schema = yup.object({
    email: yup.string().required('O e-mail é obrigatorio'),
    password: yup.string().required('A senha é obrigatoria')
}).required();

export default function Login() {
    const {data: session} = useSession()

    console.log(session?.user)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (credentials) => {
        const { email, password } = credentials
        const request = await signIn('credentials', {
            redirect: false,
            email,
            password
        });
    //    console.log(request)
    }

    return (
        <Container mt={30} boxShadow='md' p='10' rounded='md' bg='white' borderRadius={10} maxW="lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Text>Email</Text>
                <Input
                    mt={3}
                    placeholder="Digite seu e-mail"
                    type='text'
                    {...register('email', { required: true })} />
                <Text color={'red'} fontSize={16}>{errors.email?.message}</Text>
                <Text mt='2rem'>Senha</Text>
                <Input
                    mt={3}
                    placeholder="Digite sua senha"
                    type="password"
                    {...register('password', { required: true })} />
                <Text color={'red'} fontSize={16}>{errors.password?.message}</Text>
                {/* <Flex justifyContent={'end'}>
                    <Link href={'#'}>Não tem conta? cadastre-se</Link>
                </Flex> */}
                <Button type="submit" variant='unstyled' bg='#FF5C01' color={'white'} mt={'2rem'} w={'100%'} onClick={handleSubmit}>
                    Entrar
                </Button>
            </form>
        </Container>
    )
}