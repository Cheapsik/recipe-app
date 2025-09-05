import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User } from './authSlice';
import type { LoginFormData } from '../types/types';

export const loginUser = createAsyncThunk<User, LoginFormData>(
  'auth/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/Auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: data.login, password: data.password }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        return rejectWithValue(err?.message ?? 'Login failed');
      }

      const payload = await res.json();

      const user: User = {
        username: payload.email ?? payload.user?.email ?? '',
        role: payload.role ?? payload.user?.role ?? 'User',
        token: payload.token ?? payload.accessToken ?? '',
      };
      return user;
    } catch {
      return rejectWithValue('Network error');
    }
  },
);
