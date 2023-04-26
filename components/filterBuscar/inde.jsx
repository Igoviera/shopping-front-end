import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";

export function FilterBuscar() {
    const { findProductCategory } = useContext(CartContext)
    const [selectedCategory, setSelectedCategory] = useState('todos')

    const categories = [
        {value: null, label: 'Todos'},
        {value:'mercado', label: 'Mercado'},
        {value:'informatica', label: 'Informática'},
        {value:'celulares', label: 'Celulares'},
        {value:'eletrodomesticos', label: 'Eletrodomésticos'},
    ]

    const handleTabClick = (value) => {
        setSelectedCategory(value)
        findProductCategory(value)
    }

    return (
        <Box mb={2} color={'white'} overflow={'auto'} display='flex' justifyContent={'center'} bg={'#FF5C01'}>
            <Tabs ml={'32px'} variant='line' colorScheme='blackAlpha'>
                <TabList >
                    {categories.map((category) => (
                        <Tab
                            fontWeight={'semibold'}
                            key={category.value}
                            value={category.value}
                            onClick={() => handleTabClick(category.value)}
                        >
                            {category.label}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>
        </Box>
    )
}