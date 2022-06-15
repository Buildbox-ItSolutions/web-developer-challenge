
import React from 'react';

import { DeleteButton, ImageContainer, PostContainer, PostSection, TextContainer } from "./styled";
import Delete from "../../assets/images/delete.png";
import NoImage from "../../assets/images/no-image.png";

import { useData } from "../../providers/Data";

const Feed = () => {

    const { posts, setPosts } = useData();

    const DeletePost = (postID: string) => {
        const otherPosts = posts.filter((selected) => selected.id !== postID);
        setPosts(otherPosts);
    }

    return (
        <PostSection>
            {posts.map((post) => {
                const { name, message, profileImage, id } = post
                
                return (
                    <PostContainer key={id} id={id}>
                        <DeleteButton src={Delete} alt="Excluir post" onClick={() => DeletePost(id)}/>
                        <ImageContainer>
                            {NoImage === profileImage ? (
                                <img src={profileImage} alt={name} className="noImage"/>
                            ) : (
                                <img src={profileImage} alt={name} />
                            )}
                            <figcaption>{name}</figcaption>
                        </ImageContainer>
                        <TextContainer>
                            <span className="text">
                                {message}
                            </span>
                            <div>
                                <span className="sent">
                                    Enviado por
                                </span>
                                <span className="name">
                                    {name}
                                </span>
                            </div>
                        </TextContainer>
                    </PostContainer>

                )
            })}
        </PostSection>
    );
}

export default Feed;