import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { usersApi } from '@store/Users';

export default function UserView() {
  const { userId } = useParams();

  const { user } = usersApi.useGetUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      user: data?.find((usr) => `${usr.id}` === `${userId}`),
    }),
  });

  return <Box p={2}>UserView: {user?.name}</Box>;
}
