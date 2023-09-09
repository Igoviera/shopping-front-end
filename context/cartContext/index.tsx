import { useToast } from '@chakra-ui/react'
import { ReactNode, createContext, useEffect, useState } from 'react'
import api from '../../services/api'
import { useSession } from 'next-auth/react'
import { Product } from '../../types/produtc'
import { User } from '../../types/user'
import { Checkout } from '../../types/checkout'

interface CartContextType {
    children?: React.ReactNode
    user: User | null
    allProducts: Product[]
    allProductsCart: any
    loading: Boolean
    addComment: (productId: String, userId: String) => Promise<void>
    addProductCart: (id: String) => Promise<void>
    remove: (id: string) => Promise<void>
    productCheckout: (checkout: Checkout) => Promise<void>
    reqProduct: (name?: string) => Promise<void>
    findProductCategory: (value?: string) => Promise<void>
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode}) => {
    const [allProducts, setALLproducts] = useState<Product[]>([])
    const [allProductsCart, setAllProductsCart] = useState()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const { data: sesseion } = useSession()

    //Buscar usuario por ID
    const findByUser = async () => {
        try {
            const headers = { Authorization: `Bearer ${sesseion?.user.access_token}` }
            const profile = await api.get(`/auth/profile`, { headers })
            if (profile) {
                try {
                    const user = await api.get(`/user/${profile.data.sub}`)
                    setUser(user.data)
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findByUser()
    }, [sesseion?.user.access_token])

    //Buscando todos os produtos
    const reqProduct = async (name?: String) => {
        setLoading(true)
        try {
            if (name) {
                const res = await api.get(`/products/${name}`)
                setALLproducts(res.data)
                setLoading(false)
            } else {
                const res = await api.get(`/products`)
                setALLproducts(res.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    // Filtrar produtos por categoria
    const findProductCategory = async (value?: String) => {
        try {
            if (value) {
                const res = await api.get(`/products/departamento/${value}`)
                setALLproducts(res.data)
                setLoading(false)
            } else {
                const res = await api.get(`/products`)
                setALLproducts(res.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Adicionando um produto no carrinho
    const addProductCart = async (id: String) => {
        const data = {
            productId: id
        }
        try {
            await api.post(`/cart/${user?.cart[0]._id}`, data)
            toast({
                position: 'bottom-right',
                title: 'Produto adicionado ao carrinho com sucesso!😍.',
                status: 'success',
                duration: 4000,
                isClosable: true
            })
            return await findByUser()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        reqProduct()
    }, [])

    //Removendo um produto do carrinho
    const remove = async (id: String) => {
        try {
            await api.delete(`/cart/${user?.cart[0]._id}/produtos/${id}`)
            toast({
                position: 'bottom-right',
                title: 'Produto removido com sucesso!😭.',
                status: 'success',
                duration: 4000,
                isClosable: true
            })
            return await findByUser()
        } catch (error) {
            console.log(error)
        }
    }

    // Enviando comentario
    const addComment = async (productId: String, userId: String) => {
        try {
            await api.post(`/commet/producId/${productId}/userId/${userId}`)
        } catch (error) {
            console.log(error)
        }
    };

    // Finalizar compra
    const productCheckout = async (data: Checkout) => {
        try {
            await api.post(`/checkout/${user?.cart[0]._id}`, data)
        } catch (error) {
            console.log(error)    
        }
    }

    return (
        <CartContext.Provider
            value={{
                allProducts,
                loading,
                user,
                addComment,
                addProductCart,
                allProductsCart,
                productCheckout,
                remove,
                reqProduct,
                findProductCategory
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
