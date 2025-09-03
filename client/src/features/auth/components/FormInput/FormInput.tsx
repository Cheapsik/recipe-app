import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string | undefined;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...props }, ref) => (
    <label className={styles.label}>
      <p>{label}</p>
      <input
        {...props}
        className={styles.formControl}
        placeholder={props.placeholder}
        ref={ref}
        type={props.type || 'text'}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  ),
);

FormInput.displayName = 'FormInput';
export default FormInput;
