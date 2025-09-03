import { useForm, type SubmitHandler } from 'react-hook-form';
import styles from './LoginPage.module.css';

type LoginForm = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

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
          {errors.login && <span className={styles.error}>This field is required</span>}
        </label>
        <label className={styles.label}>
          <p>Password:</p>
          <input
            className={styles.formControl}
            {...register('password', { required: true })}
            placeholder="Enter password..."
          />
          {errors.password && <span className={styles.error}>This field is required</span>}
        </label>
        <input className={styles.submitBtn} type="submit" value="Login" />
      </div>
    </form>
  );
};

export default LoginPage;
