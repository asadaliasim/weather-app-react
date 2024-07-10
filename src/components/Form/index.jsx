import React, { useState } from 'react';
import Button from '../Button';
import { Flex, Input, Text } from '@chakra-ui/react';

function Form() {
  // const [inputValue, setInputValue] = useState('');

  // const handleNameChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const handleClick = () => {
    // setName(inputValue);
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
        />
        <Button
          onClick={handleClick}
          text={'Search'}
          backgroundColor={'green'}
        />
      </Flex>

      {/* btn div */}
    </>
  );
}

export default Form;
