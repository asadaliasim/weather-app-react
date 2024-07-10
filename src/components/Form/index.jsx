import React, { useState } from 'react';
import Button from '../Button';
import { Box, Input, Stack, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function Form({ setName, form, setForm }) {
  const [inputValue, setInputValue] = useState('');

  const handleNameChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setName(inputValue);
  };

  return (
    <>
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(2px)',
        }}
      ></Box>
      <Box
        style={{
          height: '30vh',
          width: '50vh',
          border: '2px solid grey',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '30%',
          left: '40%',
          zIndex: 1000, // make sure form is on top of the background
          backgroundColor: 'white', // set background color of the form
        }}
      >
        <Box
          style={{
            width: '95%',
            display: 'flex',
            justifyContent: 'end',
            cursor: 'pointer',
          }}
        >
          <CloseIcon onClick={() => setForm({ ...form, form: false })} />
        </Box>
        <Box style={{ textAlign: 'center' }}>
          <Stack spacing={2}>
            <Text fontSize="xl">{form.cardTitle}</Text>
            <Text color={'orange'}>Employee Details</Text>
            <Input
              onChange={handleNameChange}
              placeholder="please enter name"
            />
          </Stack>
        </Box>

        {/* btn div */}

        <Button onClick={handleClick} text={'Add'} backgroundColor={'green'} />
      </Box>
    </>
  );
}

export default Form;
