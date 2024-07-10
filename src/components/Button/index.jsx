import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

function Button({ onClick, backgroundColor, text }) {
  return (
    // chakra button
    <>
      <ChakraButton onClick={onClick} colorScheme={backgroundColor}>
        {text}
      </ChakraButton>
    </>
  );
}

export default Button;
