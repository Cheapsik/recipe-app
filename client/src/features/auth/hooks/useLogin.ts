import type { LoginData, LoginFormData } from '../types/types';

export const loginUser = (data: LoginFormData) => {
  const loginQueryData: LoginData = {
    username: data.login,
    password: data.password,
  };

  fetch('/api/Auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginQueryData),
  }).then((response: Response) => response.json());
};
