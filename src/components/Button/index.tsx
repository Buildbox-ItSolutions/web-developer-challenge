import { ReactNode } from 'react';
import style from './Button.module.scss';

function Button({
  children,
  type,
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      type={type ? type : 'button'}
      disabled={disabled}
      onClick={onClick}
      className={style.button}
    >
      {children}
    </button>
  );
}

export default Button;
