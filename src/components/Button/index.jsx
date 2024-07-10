import React from 'react';
import { ButtonGroup, Button as ChakraButton } from '@chakra-ui/react';

function Button({ onClick, backgroundColor, text }) {
  return (
    // chakra button
    <>
      <ButtonGroup gap="4">
        <ChakraButton
          spacing={4}
          onClick={onClick}
          size="xs"
          colorScheme={backgroundColor}
        >
          {text}
        </ChakraButton>
      </ButtonGroup>
    </>
  );
}

export default Button;
