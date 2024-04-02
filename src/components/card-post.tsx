import { Post } from "@/types/post";
import styled from "styled-components";
import { BoxStyled } from "./Form/image-input";
import Image from "next/image";
import DeleteIcon from "./icons/delete-icon";
import { useFeed } from "@/context/feed";
import { useState } from "react";
import ImageIcon from "./icons/image-icon";

const CardContanier = styled.span`
  position: relative;
  display: flex;
  gap: 32px;

  max-width: 516px;
  padding: 56px 24px 32px 24px;
  border: solid 1px var(--greyish-brown-two);
  background-color: var(--bg-card-post);

  label {
    position: relative;
    min-width: 88px;
    align-self: flex-start;
  }
  [data-delete] {
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 12px;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  p {
    max-width: 348px;
    font-size: 16px;
    line-height: 20px;
    color: var(--warm-grey-three);
    font-weight: normal;
  }
`;

const InfoName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h5 {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.29px;
    line-height: 16px;
    color: var(--brownish-grey);
  }
  h4 {
    color: var(--warm-grey-two);
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
  }
`;

export default function CardPost({ post }: { post: Post }) {
  const { posts, setPosts } = useFeed();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    const postsFilted = posts.filter((p) => p.id !== post.id);
    setPosts(postsFilted);
  };

  return (
    <CardContanier>
      <DeleteIcon data-delete onClick={handleClick} />
      <BoxStyled $variant="image">
        {!imageError ? (
          <Image
            src={post.image}
            alt="avatar"
            fill
            priority
            sizes="max-inline-size: 100%"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImageIcon />
        )}
      </BoxStyled>
      <InfoCard>
        <p>{post.description}</p>
        <InfoName>
          <h5>Enviado por</h5>
          <h4>{post.name}</h4>
        </InfoName>
      </InfoCard>
    </CardContanier>
  );
}
