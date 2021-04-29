import React, { memo } from 'react';
import { Box, Button } from '@chakra-ui/react';

export const CardActions = memo(({ onDelete }) => {
  return (
    <Box
      w="100%"
      h="20px"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      mt="5px"
    >
      <Button
        onClick={onDelete}
        bgColor="red.200"
        color="white"
        w="100px"
        size="xs"
      >
        Delete
      </Button>
    </Box>
  );
});
