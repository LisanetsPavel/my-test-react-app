import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGetPostsQuery } from '@store/Posts/queries/postsApi';

export default function Posts() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <Typography variant="h2"> Loading.... </Typography>;
  }

  return (
    <Box
      margin={2}
      sx={{
        overflow: 'auto',
        height: 'calc(100vh - 270px)',
      }}
    >
      {data?.map((post) => (
        <Box margin={2}>{post.title}</Box>
      ))}
      {error && `${error}`}
    </Box>
  );
}
