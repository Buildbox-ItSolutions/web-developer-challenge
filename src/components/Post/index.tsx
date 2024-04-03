import { Image, TrashSimple } from "@phosphor-icons/react";
import {ButtonsContainer,Comment,HeaderContainer,PostContainer} from "./style";
import { FormEvent, useState } from "react";
import { Comments } from "../Comments";
import foto1 from '../../assets/photo-base 2.png'
import foto2 from '../../assets/photo-base 1.png'
import foto3 from '../../assets/photo-base.png'

type CommentsPostProps = {
  id: number;
  name: string;
  comment: string;
  image: string;
};

const images = [foto1,foto2,foto3]


export const Post = () => {
  const [showImage, setShowImage] = useState("");
  const [icon, setIcon] = useState(true);
  const [comments, setComments] = useState<CommentsPostProps[]>([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [emphasis, setEmphasis] = useState(false);

  function showImages() {
    setIcon(false);
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    setShowImage(randomImage);
  }

  function handleNewCommentPost(event: FormEvent) {
    setShowImage("");
    event.preventDefault();
    const addNewComment = {
      id: Math.ceil(Math.random() * 100),
      name: userName,
      comment: message,
      image: showImage,
    };
    setComments([...comments, addNewComment]);
    setUserName("");
    setMessage("");
    setIcon(true);
  }

  function handlClick() {
    setEmphasis(true);
    setTimeout(() => setEmphasis(false), 1000);
  }

  function handleDeleteComment(commentId: number) {
    const newComments = comments.filter((comment) => comment.id !== commentId);
    setComments(newComments);
  }

  function toDiscard() {
    setTimeout(() => {
      setUserName("");
      setMessage("");
      setIcon(true);
      setShowImage("");
    }, 300);
  }

  const isNewCommentEmpty = message.trim().length === 0 || userName.trim().length === 0 || showImage === "";

  return (
    <div>
      <PostContainer>
        <HeaderContainer>
          <header>
            {icon ? (
              <button onClick={showImages}>
                <Image size={24} />
              </button>
            ) : (
              <img src={showImage} alt="" />
            )}
          </header>

          {showImage && (
            <span onClick={handlClick}>
              <TrashSimple size={24} />
            </span>
          )}
        </HeaderContainer>

        <Comment>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={userName}
            onChange={({ target }) => setUserName(target.value)}
          />
          <textarea
            placeholder="Mensagem"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </Comment>
        <ButtonsContainer>
          <a onClick={toDiscard} className={emphasis ? "focus" : ""}>
            Descartar
          </a>
          <button
            className={emphasis ? "focus" : ""}
            onClick={handleNewCommentPost}
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </ButtonsContainer>
      </PostContainer>

      <div>
        {comments.length > 0 && <h3>Feed</h3> }
      
        {comments?.map((comment) => (
          <Comments
            key={comment.id}
            id={comment.id}
            content={comment.comment}
            user={comment.name}
            source={comment.image}
            onDelete={() => handleDeleteComment(comment.id)}
          />
        ))}
      </div>
    </div>
  );
};
