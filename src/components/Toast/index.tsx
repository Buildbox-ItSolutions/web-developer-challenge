import { Check, Info, SmileySad, Warning } from 'phosphor-react';
import { Container } from './styles';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function Toast({ title, message, type }: ToastProps) {
  function setIcon() {
    switch (type) {
      case 'info':
        return <Info color="#3498db" />;
      case 'success':
        return <Check color="#07bc0c" />;
      case 'warning':
        return <Warning color="#f1c40f" />;
      case 'error':
        return <SmileySad color="#e74c3c" />;
      default:
        return <Warning color="#f1c40f" />;
    }
  }

  return (
    <Container>
      {setIcon()}

      <div className="message-content">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  );
}
