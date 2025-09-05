import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginPage.module.scss';
import { loginSchema } from '../../validation/loginSchema';
import FormInput from '../../../../shared/components/FormInput/FormInput';
import FormButton from '../../../../shared/components/FormButton/FormButton';
import type { LoginFormData } from '../../types/types';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../../app/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../store/authSlice';
import { loginUser } from '../../store/authThunks';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const user: User = await toast.promise(
        dispatch(loginUser({ login: data.login, password: data.password })).unwrap(),
        {
          pending: 'Logging in...',
          success: 'Logged in successfully!',
          error: 'Wrong credentials.',
        },
      );
      if (user.role === 'Admin') navigate('/admin');
      else navigate('/user');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h1 className={styles.greeting}>Hi!</h1>
        <FormInput
          label="Login:"
          type="text"
          error={errors.login?.message}
          {...register('login', { required: true })}
          placeholder="Enter login..."
        />
        <FormInput
          label="Password:"
          type="password"
          error={errors.password?.message}
          {...register('password', { required: true })}
          placeholder="Enter password..."
        />
        <FormButton type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginPage;
