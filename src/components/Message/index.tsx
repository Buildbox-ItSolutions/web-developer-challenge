import { Avatar } from '../Avatar'
import { DeleteMessageButton, MessageContainer, MessageData } from './styles'
import { XCircle } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { MessageDTO } from '../../contexts/MessagesContext';
import { useMessage } from '../../hooks/useMessage';
import { toast } from 'react-toastify';

interface MessageProps {
  messageData: MessageDTO;
}

export function Message({ messageData }: MessageProps) {
  const { deleteMessage } = useMessage();
  const colors = useTheme();

  function handleDeleteMessage() {
    toast.promise(
      deleteMessage(messageData.id),
      {
        pending: "Aguarde! Estamos deletando sua mensagem.",
        success: "Mensagem deletada com sucesso."
      }
    );

  }

  return (
    <MessageContainer>
      <DeleteMessageButton type='button' onClick={handleDeleteMessage}>
        <XCircle size={20} color={colors['red-300']} />
      </DeleteMessageButton>
      
      <MessageData>
        <Avatar 
          authorAvatar={messageData.authorAvatar}
        />

        <div className='content'>
          <p>{messageData.content}</p>

          <strong>Enviado por</strong>
          <span>{messageData.author}</span>
        </div>
      </MessageData>
    </MessageContainer>
  )
}