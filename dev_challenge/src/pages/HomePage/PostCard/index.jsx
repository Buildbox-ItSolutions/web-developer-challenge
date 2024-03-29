import React, { useContext } from "react";
import styles from './style.module.scss';
import Delete from "../../../assets/delete.svg";
import { PostsContext } from "../../../providers/PostsContext";
import imgIcon from "../../../assets/image.svg";

export const PostCard = ({ post }) => {

    const { deletePost } = useContext(PostsContext);


    return (
        <li className={styles.containerCard}>
            <button className={styles.deleteButton} onClick={() => deletePost(post.id)} title="Deletar" aria-label="delete">
                <img src={Delete} alt="deleteButton" />
            </button>
            <div className={styles.userPost}>
                {
                    post.icon ? <img src={post.icon} className={styles.userIcon} /> : <div className={styles.iconSystem}><img src={imgIcon} className={styles.iconImg} /></div>
                }

                <div className={styles.textInfo}>
                    <h2 className={styles.textMessage}>{post.message}</h2>
                    <p className={styles.textUser}>
                        <span>Enviado por</span>
                        {post.name}
                    </p>
                </div>
            </div>
        </li>
    );
}