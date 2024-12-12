import "./styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const index = ({ post, handleDelete }) => {
  return (
    <div className="post-card-container">
      <div className="post-image">
        <img src={post.photo} alt="" />
      </div>

      <div className="post">
        <p>{post.message}</p>

        <h4>Enviado por</h4>
        <p>{post.name}</p>
      </div>

      <AiOutlineCloseCircle onClick={() => handleDelete(post.id)} />
    </div>
  );
};

export default index;
