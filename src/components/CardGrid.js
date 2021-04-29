import React from 'react';
import { Button, Grid } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';
import { fetchPosts } from '../api';

import { Card } from './Card';
import { Fragment } from 'react';

// getNextPageParam
// data.pages

export const CardGrid = () => {
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    'posts',
    fetchPosts,
    {
      getNextPageParam: lastpage => lastpage.offset,
    }
  );

  if (isLoading) return <p>loading...</p>;

  const itemToElement = post => <Card key={post.id} post={post} />;

  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyItems="center"
        gap="4%"
        w="50%"
        mt="1rem"
      >
        {data.pages.map((page, i) => (
          <Fragment key={i}>{page.records.map(itemToElement)}</Fragment>
        ))}
      </Grid>
      <Button mt="15px" onClick={fetchNextPage}>
        load more
      </Button>
    </>
  );
};
