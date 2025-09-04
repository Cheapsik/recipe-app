export type LoginData = {
  username: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  username: string;
  role: 'Admin' | 'User';
};

export type LoginFormData = {
  login: string;
  password: string;
};
