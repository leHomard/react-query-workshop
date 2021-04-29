import React from 'react';
import { Box, Stack } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';

import { HeaderTop, HeaderStats, HeaderDescription } from './index';

export const Header = () => {
  return (
    <Box w="50%" h="250px" display="flex" flexDirection="row">
      <Box w="25%" display="flex" alignItems="center" justifyContent="center">
        <Avatar
          bg="purple.200"
          w="200px"
          h="200px"
          showBorder
          borderColor="gray.400"
          name="Omar HARRAS"
          src="photopro.png"
        />
      </Box>
      <Stack p="6rem" spacing={4}>
        <HeaderTop />
        <HeaderStats nbPosts="56" nbFollowers="316" nbFollowing="560" />
        <HeaderDescription />
      </Stack>
    </Box>
  );
};
