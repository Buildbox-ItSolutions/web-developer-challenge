import { BixNavbar } from '@bix/core';

import { CreatePost } from '@/components/create-post';

import { IndexStyled } from './styles';
import { Feed } from '@/components/feed';

const Index = () => {
  return (
    <IndexStyled>
      <BixNavbar>
        <img src="/bx-logo@3x.png" alt="Bix" />
      </BixNavbar>

      <section>
        <CreatePost />

        <Feed />
      </section>
    </IndexStyled>
  );
};

export default Index;
