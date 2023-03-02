import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  logged: boolean;
  token?: string;
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
      state.token = 'sassdewefcrswrr3d23d2ds';
    },
    logout: (state) => {
      state.logged = false;
      state.token = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
