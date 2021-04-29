import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { addPost } from '../api';

export const HeaderTop = () => {
  const [imageUrl, setImageUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation('posts', addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      onclose();
    },
  });

  const handleAddPost = async () => mutateAsync(imageUrl);
  return (
    <Box
      w="220px"
      h="30px"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Text fontSize="2xl" fontWeight="bold" mr="2rem">
        Robusta
      </Text>
      <Button onClick={onOpen} size="xs">
        Add a post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Add a post</ModalHeader>
          <ModalCloseButton />
          <InputGroup>
            <InputLeftElement
              w="30%"
              children={
                <Text fontSize="md" fontWeight="bold">
                  Image URL :{' '}
                </Text>
              }
            />
            <Input
              value={imageUrl}
              onChange={event => setImageUrl(event.target.value)}
              ml="7.5rem"
              w="70%"
              type="text"
              placeholder="Enter url..."
            />
          </InputGroup>
          <ModalFooter>
            <Button size="sm" colorScheme="blue" onClick={handleAddPost}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
