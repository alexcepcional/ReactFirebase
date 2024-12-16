import { Box, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChildMemo = React.memo(() => {
        return (
            <Box>ChildMemo</Box>
        )
    })

export const Memo = () => {

    const [count, setCount] = useState(0) 

    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleRemove = () => {
        setCount(count - 1)
    }

  return (
    <Box>
    <Button onClick={handleAdd}>+</Button>
    <Button onClick={handleRemove}>-</Button>
    <Box>{count}</Box>
    <ChildMemo/>
    </Box>
    )
}
