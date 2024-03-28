import { PostCard } from ".";
import PhotoBaseOne from "../assets/photo-base-one.png";
import PhotoBaseTwo from "../assets/photo-base-two.png";

import styled from "styled-components";

const Feed = () => {
  return (
    <>
      <StyledH3>Feed</StyledH3>
      <PostCard image={PhotoBaseOne} message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis." name="Manuela Oliveira" />
      <PostCard image={PhotoBaseTwo} message ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus." name="Manuela Oliveira"/>
    </>
  );
};

const StyledH3 = styled.h3`
  color: var(--warm-gray-two);
  font-weight: 500;
  font-size: 1.4rem;
  margin: 5.6rem 91.1rem 0.8rem 42.5rem;
`;

export { Feed };
