import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginPage.module.css';
import { loginSchema } from '../validation/loginSchema';

type LoginFormData = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h1 className={styles.greeting}>Hi!</h1>
        <label className={styles.label}>
          <p>Login:</p>
          <input
            className={styles.formControl}
            {...register('login', { required: true })}
            placeholder="Enter login..."
          />
          {errors.login && <span className={styles.error}>{errors.login.message}</span>}
        </label>
        <label className={styles.label}>
          <p>Password:</p>
          <input
            type="password"
            className={styles.formControl}
            {...register('password', { required: true })}
            placeholder="Enter password..."
          />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </label>
        <input className={styles.submitBtn} type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginPage;
