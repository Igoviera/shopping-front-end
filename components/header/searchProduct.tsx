import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

export function Search() {
  const { reqProduct } = useContext(CartContext)

  return (
    <InputGroup>
      <Input
        onChange={(e) => reqProduct(e.target.value)}
        focusBorderColor='#FF5C01'
        bg={'white'}
        boxShadow="base"
        rounded="md"
        color="black"
        maxW={'100%'}
        placeholder="Buscar..."
      />
      <InputRightElement>
        <BiSearch size={20} color="#7e7e7e" />
      </InputRightElement>
    </InputGroup>
  )
}
