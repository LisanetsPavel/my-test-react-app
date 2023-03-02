import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  logged: boolean;
}

const initialState: AuthState = {
  logged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.logged = true;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
