import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';

import './style.css';
import { useDispatch } from 'react-redux';
import { setBuy, setRemove } from '../../features/buyCards/buyCardsSlice';
function CardDetails({
  name,
  isAvailable,
  floorPrice,
  volume,
  imageSrc,
  cardName,
}) {
  const dispatch = useDispatch();
  const handlebuy = () => {
    const data = {
      name,
      isAvailable,
      floorPrice,
      volume,
      imageSrc,
    };
    dispatch(setBuy(data));
  };

  // not functional
  const handleRemove = () => {
    const data = {
      name,
      isAvailable,
      floorPrice,
      volume,
      imageSrc,
    };
    dispatch(setRemove(data));
  };

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image boxSize="200px" src={imageSrc} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Flex align="center" grow={'inherit'}>
              <Heading style={{ textTransform: 'capitalize' }} size="md">
                {name}
              </Heading>
              {isAvailable && <RiVerifiedBadgeFill color="#2B6CB0" />}
            </Flex>
            <Flex>
              <Text style={{ textTransform: 'capitalize' }} fontSize="sm">
                Volume: {floorPrice}
              </Text>
              <Spacer />
              <Text style={{ textTransform: 'capitalize' }} fontSize="sm">
                floorPrice: {volume}
              </Text>
            </Flex>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          {cardName === 'card' ? (
            <Button
              onClick={handlebuy}
              style={{ textTransform: 'capitalize' }}
              size="xs"
              variant="solid"
              colorScheme="blue"
            >
              Buy now
            </Button>
          ) : (
            <Button
              onClick={handleRemove}
              style={{ textTransform: 'capitalize' }}
              size="xs"
              variant="solid"
              colorScheme="blue"
            >
              Remove
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}

export default CardDetails;
