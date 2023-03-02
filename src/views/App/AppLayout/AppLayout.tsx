import React from 'react';
import { CssBaseline } from '@mui/material';
import { MainContainer } from '@views/App/MainContainer';
import { Route, Routes } from 'react-router-dom';
import { UsersForm, UsersList } from '@views/Users';
import { Posts } from '@views/Posts';
import LoginPage from '../../Auth/LoginPage/LoginPage';
import UserView from '../../Users/UserView/UserView';
import ProtectedRoute from '../../../components/ProtectedRoute/ProtectedRoute';

function AppLayout() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<MainContainer />}>
            <Route path="/users" element={<UsersForm />}>
              <Route path="list" element={<UsersList />} />
              <Route path=":userId" element={<UserView />} />
            </Route>
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default AppLayout;
