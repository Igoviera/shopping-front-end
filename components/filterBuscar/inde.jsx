import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import { CartContext } from "../../context/cartContext";
import { useContext, useState } from "react";

export function FilterBuscar() {
    const { findProductCategory } = useContext(CartContext)
    const [selectedCategory, setSelectedCategory] = useState('todos')

    const categories = [
        {value: null, label: 'Todos'},
        {value:'laticinios', label: 'laticinios'},
        {value:'higiene', label: 'Higiene'},
        {value:'limpeza', label: 'Limpeza'},
        {value:'mercearia', label: 'Mercearia'},
    ]

    const handleTabClick = (value) => {
        setSelectedCategory(value)
        findProductCategory(value)
    }

    return (
        <Box overflow={'auto'} display='flex' justifyContent={'center'}>
            <Tabs ml={'32px'} colorScheme='green' isLazy>
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