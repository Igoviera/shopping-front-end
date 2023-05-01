import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontSize: '18px',
                fontWeight: 300,
                bg:'red !important'
            }
        }
    }
})