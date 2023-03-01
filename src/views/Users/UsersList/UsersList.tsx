import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useGetUsersQuery, User } from '@store/Users';
import { UserItem } from '@views/Users';

export default function UsersList() {
  const { data, error, isLoading, refetch, isFetching } = useGetUsersQuery();

  if (isLoading) {
    return <Typography variant="h2"> Loading.... </Typography>;
  }

  const onRefetchClick = () => {
    refetch();
  };

  return (
    <Box
      mt={2}
      sx={{
        height: 'calc(100vh - 270px)',
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle2">Users:</Typography> <Button onClick={onRefetchClick}>refetch</Button>
      </Box>
      <Box
        sx={{
          overflow: 'auto',
          opacity: `${isFetching ? 0.5 : 1}`,
          height: '100%',
        }}
      >
        {data?.map((user: User) => (
          <UserItem user={user} />
        ))}
      </Box>
      {error && `${error}`}
    </Box>
  );
}
