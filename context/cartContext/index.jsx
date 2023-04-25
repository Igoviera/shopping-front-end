import { useToast } from '@chakra-ui/react';
import { createContext, useEffect, useState } from 'react';
import api from '../../services/api';

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [allProducts, setALLproducts] = useState()
    const [allProductsCart, setAllProductsCart] = useState()
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    //Buscando todos os produtos
    const reqProduct = async (name) => {
        setLoading(true)
        try {
            if (name) {
                const res = await api.get(`/products/${name}`)
                setALLproducts(res.data)
                setLoading(false)
            }else{
                const res = await api.get(`/products`)
                setALLproducts(res.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    };

    useEffect(() => {
        reqCart()
    }, []);


    // Filtrar produtos por categoria
    const findProductCategory = async (value) => {
        try {
            if (value) {
                const res = await api.get(`/products/departamento/${value}`)
                setALLproducts(res.data)
                setLoading(false)
            }else{
                const res = await api.get(`/products`)
                setALLproducts(res.data)
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
        }
    };


    //Buscando todos os produtos do carrinho do usuario
    const reqCart = async () => {
        try {
            const response = await api.get('/cart/644704b1ffaf8343a4276134')
            setAllProductsCart(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    //Adicionando um produto no carrinho
    const addProductCart = async (id) => {
        const data = {
            productId: id
        };
        try {
            await api.post('/cart/644704b1ffaf8343a4276134', data)
            toast({
                position: 'bottom-right',
                title: 'Produto adicionado ao carrinho com sucesso!😍.',
                status: 'success',
                duration: 4000,
                isClosable: true,

            })
            return await reqCart()
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        reqProduct()
    }, []);

    //Removendo um produto do carrinho
    const remove = async (id) => {
        try {
            await api.delete(`/cart/644704b1ffaf8343a4276134/produtos/${id}`)
            toast({
                position: 'bottom-right',
                title: 'Produto removido com sucesso!😭.',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            return await reqCart()

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <CartContext.Provider
            value={{
                allProducts,
                loading,
                addProductCart,
                allProductsCart,
                remove,
                reqProduct,
                findProductCategory
            }}>
            {children}
        </CartContext.Provider>
    )
}