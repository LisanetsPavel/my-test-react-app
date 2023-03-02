import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@configs/store';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { logged } = useSelector((state: RootState) => state.auth);

  if (!logged) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
