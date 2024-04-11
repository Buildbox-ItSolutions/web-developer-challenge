import React, { useState } from 'react';
import styled from "styled-components"
import Form from './Form';
import Feed from './Feed';
const profile = require("../../assets/images/photo-base.png") as string;
const profile2 = require("../../assets/images/photo-base3.png") as string;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Publication(): JSX.Element {
  const [feeds, setFeeds] = useState([
    {
      photo: profile,
      name: 'Manuela Oliveira',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.',
    },
    {
      photo: profile2,
      name: 'Manuela Oliveira',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit',
    },
  ]);

  return (
      <Container>
        <Form feeds={feeds} setFeeds={setFeeds} />
        <Feed feeds={feeds} setFeeds={setFeeds}/>
      </Container>
  );
}

export default Publication;
