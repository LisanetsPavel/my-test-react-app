import { Box, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useDeleteUserMutation, User, useUpdateUserMutation } from '@store/Users';

interface Props {
  user: User;
}

export default function UserItem({ user }: Props) {
  const [editMode, setEditMode] = useState<boolean>();

  const [newUserName, setNewUsername] = useState<string>(user.name);

  const [deleteUser] = useDeleteUserMutation();

  const [updateUser] = useUpdateUserMutation();

  const onDeleteClick = (userId: number) => {
    deleteUser(userId);
  };

  const onUsernameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNewUsername(event.target.value);
  };

  const handleEditUser = () => {
    updateUser({ ...user, name: newUserName });
    setEditMode(false);
  };

  return (
    <Box
      padding={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        '&:hover': {
          backgroundColor: (theme) => theme.palette.secondary.light,
        },
        '&:hover svg': {
          visibility: 'visible',
        },
      }}
    >
      {editMode ? (
        <Box
          display="flex"
          justifyContent="space-between"
          gap={2}
          height="40px"
          sx={{
            '& .MuiInputBase-root': {
              height: '40px',
            },
          }}
        >
          <TextField value={newUserName} onChange={onUsernameChange} />
          <Button variant="outlined" onClick={handleEditUser}>
            EDIT USER
          </Button>
          <Button variant="outlined" onClick={() => setEditMode(false)}>
            CANCEL
          </Button>
        </Box>
      ) : (
        <>
          {user?.name}
          <Box display="flex" gap={2}>
            <EditIcon
              sx={{
                visibility: 'hidden',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={() => setEditMode(true)}
            />
            <DeleteIcon
              sx={{
                visibility: 'hidden',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={() => onDeleteClick(user?.id)}
            />
          </Box>
        </>
      )}
    </Box>
  );
}
