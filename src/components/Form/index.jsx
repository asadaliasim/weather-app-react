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
} from '@chakra-ui/react';

function Form() {
  const dispatch = useDispatch();

  //  need to handle for rejection as well

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
        <ModalContent>
          <ModalHeader>Weather Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {weatherData ? (
              <>
                <Text>
                  Temperature: {temp}°C
                  <br />
                  Description: {weatherDescription}
                </Text>
                <Image src={imageUrl} alt="Weather Icon" />
              </>
            ) : (
              <Text>Loading...</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
