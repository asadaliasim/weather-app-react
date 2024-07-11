import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../features/weatherData/weatherDataActions';
import {
  Flex,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Stack,
} from '@chakra-ui/react';

function Form() {
  const dispatch = useDispatch();

  //  need to handle for rejection as well
  const status = useSelector((state) => state.weather);

  const weatherData = useSelector((state) => state.weather.weather);
  const temp = weatherData.main?.temp;
  const icon = weatherData.weather?.[0].icon;
  const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const weatherDescription = weatherData.weather?.[0].description;

  const [inputValue, setInputValue] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue === '' || null) return;
    dispatch(getWeatherData(inputValue));
    onOpen();
  };

  return (
    <>
      <Flex justify="center" mb={'10px'}>
        <Text fontSize="4xl">Welcome to Weather App</Text>
      </Flex>
      <Flex justify="center" mb={'10px'}>
        <Text fontSize="2xl">
          Enter the Name of your City to get weather Info
        </Text>
      </Flex>
      <Flex justify="center">
        <Input
          mr="4px"
          htmlSize={40}
          width="auto"
          placeholder="Enter City Name"
          onChange={handleNameChange}
        />
        <Button onClick={handleClick} backgroundColor={'green'} color={'white'}>
          Search
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxW="600px"
          maxH="800px"
          sx={{ width: '80vw', height: '80vh' }}
        >
          <ModalHeader>Weather Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {status.isWeatherDataLoading && <Text>Loading...</Text>}

            {status.isWeatherDataFullfilled && (
              <>
                <Stack spacing={3}>
                  <Text as="b" fontSize="xl">
                    The Weather is currently:{weatherDescription}
                  </Text>
                  <Text>
                    The Temperature in {inputValue} is ${temp} Degrees Celsius
                  </Text>
                  <Text> Below is the Visual illustration of weather</Text>
                </Stack>

                <Image src={imageUrl} alt="Weather Icon" />
              </>
            )}
            {status.isWeatherDataRejected && (
              <Text>
                City {inputValue} does not exist
                <br />
                please enter a valid city name
              </Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
