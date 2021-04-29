import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

export const HeaderStats = ({ nbPosts, nbFollowers, nbFollowing }) => {
  return (
    <Box
      w="350px"
      h="30px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="medium">{nbPosts} Posts</Text>
      <Text fontWeight="medium">{nbFollowers} Followers</Text>
      <Text fontWeight="medium">{nbFollowing} Following</Text>
    </Box>
  );
};
