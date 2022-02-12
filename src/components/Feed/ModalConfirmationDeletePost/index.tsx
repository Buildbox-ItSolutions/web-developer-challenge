import Modal from "react-modal";
import { Content, Actions } from "./styles";

interface Props {
  idPost?: number;
  onClose: () => void;
  onRemovePost: (id: number) => Promise<void>;
}

export const ModalConfirmationDeletePost = ({
  idPost,
  onClose,
  onRemovePost,
}: Props) => {
  return (
    <Modal
      isOpen={!!idPost}
      onRequestClose={onClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Content>
        <div>
          <h2>Tem certeza que deseja excluir?</h2>

          <Actions>
            <button type="button" onClick={onClose}>
              Fechar
            </button>
            <button type="button" onClick={() => onRemovePost(idPost || 0)}>
              Sim, excluir
            </button>
          </Actions>
        </div>
      </Content>
    </Modal>
  );
};
