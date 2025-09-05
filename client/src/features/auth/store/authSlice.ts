import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunks';

export type User = {
  username: string;
  role: 'User' | 'Admin';
  token: string;
};

type AuthState = {
  user: User | null;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem('token', action.payload.token);
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
