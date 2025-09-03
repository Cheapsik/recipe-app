import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './LoginPage.module.scss';
import { loginSchema } from '../validation/loginSchema';
import FormInput from '../../../shared/components/FormInput/FormInput';
import FormButton from '../../../shared/components/FormButton/FormButton';

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
