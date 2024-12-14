import { Box, Flex, Heading, Input, InputGroup, InputRightAddon, Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { searchProduct } from '../services/productServices'
import { IoSearchCircleOutline } from "react-icons/io5"
import { ItemListContainer } from '../components'

export const Events = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [products, setProducts] = useState([])
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = () => {
        searchProduct(searchQuery)
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.error(err))
    }

  return (

    <Flex flexDirection={"column"} width={"100vw"} margin={"12px 20px"}>
        <p>Please be advised that this section is used by developers only.</p>
        <br />
        <Heading size="2xl">Events</Heading>
        <br />
        <Heading size="lg">Input</Heading>
        <br />
        <Flex>
            <InputGroup>
            <Input type="text"
            placeholder="Search for a product..."
            onChange={handleChange}>
            </Input>
            <InputRightAddon onClick={handleSearch}>
            <IoSearchCircleOutline size={"2rem"} />
            </InputRightAddon>
            </InputGroup>
        </Flex>
        <ItemListContainer products={products}/>
        <br />
        <Divider />
        <br />
        <Heading size="lg">
            Mouse Events
        </Heading>
        <br />
        <Box 
        height={200} 
        width={200} 
        border={'1px solid white'} 
        justifyContent={"center"}
        alignContent={"center"}
        textAlign={"center"}
        marginBottom={"15px"}
        bgColor={isMouseEnter ? "white" : "red"}
        color={isMouseEnter ? "red" : "white"}
        onMouseEnter={() => {setIsMouseEnter(true)}} onMouseLeave={() => {setIsMouseEnter(false)}}>
            { isMouseEnter ? "Mouse Enter true" : "Mouse Enter false"}
        </Box>
    </Flex>
  )
}
