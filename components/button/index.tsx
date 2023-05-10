import { Button } from '@chakra-ui/react'

type MyButtonProps = {
    label: string
    w: string
    onclick: () => void
}

export function MyButton({ label, onclick, ...res }: MyButtonProps) {
    return (
        <Button
            color={'white'}
            variant="unstyled"
            transition={'0.5s'}
            _hover={{ bg: '#e45000' }}
            bg="#FF5C01"
            onClick={onclick}
            {...res}
        >
            {label}
        </Button>
    )
}
