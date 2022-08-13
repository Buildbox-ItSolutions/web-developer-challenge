import { usePostContext } from 'common/context/Post';
import IPost from 'types/post';
import style from './Post.module.scss';

function Post({ image, message, author, id }: IPost) {
  const { removePost } = usePostContext();
  const handleClick = () => {
    if (id) {
      removePost({ image, message, author, id });
    }
  };
  return (
    <div className={`${style.post} ${style.fadein}`}>
      <div className={style.close} onClick={handleClick}></div>
      <div className={style.imgWrapper}>
        <img
          src={image ? image : require('../../../assets/img/no-image.png')}
          alt="Imagem do Post"
          className={image ? '' : style.noImage}
        />
      </div>
      <div className={style.message}>
        <p>{message}</p>
      </div>
      <div className={style.author}>
        <span>Enviado por</span>
        <span>{author}</span>
      </div>
    </div>
  );
}

export default Post;
