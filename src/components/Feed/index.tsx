import { postStore } from "../../store/Posts";
import { StyledContent, StyledFeed } from "./style";
import close from "../../assets/delete.svg";
import { Modal } from "../Modal";

export const Feed = () => {
  const { posts, setToRemove, openConfirm, setOpenConfirm } = postStore();

  const openModal = (indexRemove: number) => {
    setToRemove(indexRemove);
    setOpenConfirm(true);
  };
  return (
    <StyledFeed>
      <h3>Feed</h3>
      <section>
        {posts.map((post, index) => {
          return (
            <StyledContent key={index}>
              <button onClick={() => openModal(index)}>
                <img src={close} alt="Fechar" />
              </button>
              <figure>
                <img className={`${!post.img.includes("image@3x") ? "imgProfile":"imgDefault"}`} src={`${post.img}`} alt="Imgaem de perfil" />
              </figure>
              <div className="content-info">
                <p>{post.content}</p>
                <div>
                  <h4>Enviado por</h4>
                  <p>{post.author}</p>
                </div>
              </div>
            </StyledContent>
          );
        })}
      </section>
      {openConfirm && <Modal />}
    </StyledFeed>
  );
};
