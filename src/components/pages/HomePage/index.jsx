import React from 'react';

import { RouterProvider } from 'react-router-dom';
import router from '../../../routes';
import { ChakraProvider } from '@chakra-ui/react';

function HomePage() {
  return (
    <>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default HomePage;
