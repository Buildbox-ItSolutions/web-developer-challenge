import { notification } from "../../service/Notification";
import { postStore } from "../../store/Posts";
import { StyledModal } from "./style";

export const Modal = () => {
  const { posts, setPosts, toRemove, setOpenConfirm } = postStore();

  const remove = () => {
    const filterPosts = posts.filter((_post, index) => toRemove !== index);

    setPosts(filterPosts);
    notification({ message: "Post removido com sucesso", type: "success" });
    setOpenConfirm(false);
  };

  return (
    <StyledModal>
      <div className="modal">
        <p>Tem certeza que deseja remover esse post?</p>
        <div>
          <button className="confirmBtn" onClick={remove}>
            Confirmar
          </button>
          <button onClick={() => setOpenConfirm(false)}>Fechar</button>
        </div>
      </div>
    </StyledModal>
  );
};
