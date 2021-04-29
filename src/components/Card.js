import React, { memo, useCallback } from 'react';
import { Box, Image } from '@chakra-ui/react';

import { CardActions } from './index';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../api';

export const Card = memo(({ post }) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation('posts', deletePost, {
    onSuccess: () => queryClient.invalidateQueries('posts'),
  });

  const handleDelete = useCallback(async () => {
    mutateAsync(post.id);
  }, [mutateAsync, post]);

  return (
    <Box
      h="300px"
      p="10px"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
    >
      <Image
        w="250px"
        h="250px"
        src={post.fields.imageUrl}
        objectFit="cover"
        mb="5px"
      />
      <CardActions onDelete={handleDelete} />
    </Box>
  );
});
