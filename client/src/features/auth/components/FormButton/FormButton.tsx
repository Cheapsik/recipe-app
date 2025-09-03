import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './FormButton.module.scss';

type FormButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  type: 'submit' | 'button';
  handleClick?: () => void;
};

export const FormButton = forwardRef<HTMLInputElement, FormButtonProps>(
  ({ value, handleClick, ...props }) => (
    <input
      {...props}
      className={styles.formButton}
      type={props.type}
      value={value}
      onClick={handleClick}
    />
  ),
);

FormButton.displayName = 'FormButton';
export default FormButton;
