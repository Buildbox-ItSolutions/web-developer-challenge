import React, { useState, useEffect, useRef } from "react";
import photoUploadSVG from "../../assets/photo-upload.svg";
import otherImage from "../../assets/image.svg";
import deleteIcon from "../../assets/trash (1).svg";
import Post from "../Posts/Post";
import { PostType } from "../PostType";
import Feed from "../Feed/Feed";
import {
  PostListContainer,
  DeleteButton,
  PhotoUpload,
  PhotoInput,
  PhotoPreviewContainer,
  PhotoPreview,
  UploadIcon,
  OtherImage,
  InputField,
  MessageField,
  ButtonContainer,
  ButtonDescartar,
  ButtonPublicar,
} from "./styles";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [photoURL, setPhotoURL] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [nextId, setNextId] = useState(1);

  const publishButtonRef = useRef<HTMLButtonElement>(null);

  const addPost = (newPost: PostType) => {
    const postWithId = { ...newPost, id: nextId.toString() };
    setNextId(nextId + 1);
    setPosts([...posts, postWithId]);
  };

  useEffect(() => {
    const isFilled = !!name && !!message && !!photoURL;
    if (publishButtonRef.current) {
      publishButtonRef.current.disabled = !isFilled;
    }
  }, [name, message, photoURL]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFields = () => {
    setPhotoURL(null);
    setName("");
    setMessage("");
    if (publishButtonRef.current) {
      publishButtonRef.current.disabled = true;
    }
  };

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <PostListContainer>
        <DeleteButton photoURL={photoURL} onClick={() => setPhotoURL(null)}>
          <img src={deleteIcon} alt="Delete Icon" />
        </DeleteButton>
        <PhotoUpload>
          <PhotoInput
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          <PhotoPreviewContainer>
            {photoURL ? (
              <PhotoPreview src={photoURL} alt="Uploaded Photo" />
            ) : (
              <UploadIcon src={photoUploadSVG} alt="Upload Icon" />
            )}
            <OtherImage
              photoURL={photoURL}
              src={otherImage}
              alt="Other Image"
            />
          </PhotoPreviewContainer>
        </PhotoUpload>
        <InputField
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <MessageField
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ButtonContainer>
          <ButtonDescartar onClick={clearFields}>Descartar</ButtonDescartar>
          <ButtonPublicar
            ref={publishButtonRef}
            isFilled={!!name && !!message && !!photoURL}
            disabled={!name || !message || !photoURL}
            onClick={() =>
              addPost({
                id: "",
                name: name,
                message: message,
                photoURL: photoURL,
                onDelete: () => {},
              })
            }
          >
            Publicar
          </ButtonPublicar>
        </ButtonContainer>
      </PostListContainer>
      <Feed />
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <Post
            key={post.id}
            id={post.id}
            name={post.name}
            message={post.message}
            photoURL={post.photoURL}
            onDelete={() => handleDeletePost(post.id)}
          />
        ))}
    </>
  );
};

export default PostList;
