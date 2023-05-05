import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  Tabs,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react'
import { CartContext } from '../../context/cartContext'
import React, { useContext, useState } from 'react'
import { Search } from '../header/searchProduct'
import { FiMenu } from 'react-icons/fi'

export function FilterBuscar() {
  const { findProductCategory } = useContext(CartContext)
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const categories = [
    { value: null, label: 'Todos' },
    { value: 'mercado', label: 'Mercado' },
    { value: 'informatica', label: 'Informática' },
    { value: 'celulares', label: 'Celulares' },
    { value: 'eletrodomesticos', label: 'Eletrodomésticos' }
  ]

  const handleTabClick = (value) => {
    setSelectedCategory(value)
    findProductCategory(value)
  }

  return (
    <Box mb={2} color={'white'} display="flex" justifyContent={'center'} bg={'#FF5C01'}>
      <Flex margin={'auto'} display={['block', 'block', 'none']}>
        <Button ref={btnRef} bg={'none'} onClick={onOpen}>
          <FiMenu size={30} />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Entre ou cadastre-se</DrawerHeader>

            <DrawerBody>
              <Button w={'100%'} bg="#FF5C01" color={'white'} variant="unstyled">
                Login
              </Button>
              <Text fontWeight={'semibold'} fontSize={'1.2rem'} mt={10}>
                Todos os departamentos
              </Text>
              <Tabs variant="line" colorScheme="orange">
                <TabList flexDirection={'column'} alignItems={'start'}>
                  {categories.map((category) => (
                    <Tab
                      key={category.value}
                      value={category.value}
                      onClick={() => handleTabClick(category.value)}
                    >
                      {category.label}
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Container pt={2} pb={2} w={'100%'} display={['block', 'block', 'none']}>
        <Search />
      </Container>
      <Tabs variant="line" colorScheme="blackAlpha" display={['none', 'none', 'block']}>
        <TabList>
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
