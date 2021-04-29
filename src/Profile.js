import React from 'react';

import { Center, Divider } from '@chakra-ui/layout';
import { CardGrid, Header } from './components/index';

export const Profile = () => {
  return (
    <Center display="flex" flexDirection="column">
      <Header />
      <Divider w="50%" borderBottomWidth="2px" />
      <CardGrid />
    </Center>
  );
};
