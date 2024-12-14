import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Rating = ({ rating, numReviews }) => {
  const starColor = useColorModeValue('gray.400', 'white') + ' !important'; 
  const filledStarColor = useColorModeValue('yellow', 'yellow') + ' !important'; 

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<BsStarFill key={i} color={filledStarColor} />);
    } else if (rating >= i - 0.5) {
      stars.push(<BsStarHalf key={i} color={filledStarColor} />);
    } else {
      stars.push(<BsStar key={i} color={starColor} />);
    }
  }

  return (
    <Flex align="center">
      {stars}
      <Box as="span" ml={2} fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
        {numReviews} reviews
      </Box>
    </Flex>
  );
};

export const ItemCard = ({ data }) => {
  return (
    <Link to={`/item/${data.id}`}>
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW="xs"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      w="240px"
      h="380px"
      m={4} 
    >
      {data.isNew && (
        <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
      )}

      <Image src={data.thumbnail} alt={`Picture of ${data.name}`} roundedTop="lg" objectFit="cover" />

      <Box p="5">
        <Box display="flex" alignItems="baseline">
          {data.isNew && (
            <Badge rounded="full" px="2" fontSize="0.9em" colorScheme="red">
              New
            </Badge>
          )}
        </Box>

        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {data.name}
          </Box>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Rating rating={data.rating} numReviews={data.reviews.length} />
          <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              $
            </Box>
            {data.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
    </Link>
  );
};
