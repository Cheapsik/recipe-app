import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunks';
import { jwtDecode } from 'jwt-decode';

export type User = {
  username: string;
  role: 'User' | 'Admin';
  token: string;
};

type AuthState = {
  user: User | null;
};

const initialState = (): AuthState => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = jwtDecode(token) as User;
    return { user };
  }

  return {
    user: null,
  };
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
