import { BixNavbar, NavbarLogo } from '@bix/core';
import { useNavigate } from 'react-router-dom';

import { CreatePost } from '@/components/create-post';

import { IndexStyled } from './styles';

const Index = () => {
  const navigate = useNavigate();
  const logo: NavbarLogo = {
    src: '/bx-logo@3x.png',
    alt: 'Bix',
  };

  return (
    <IndexStyled>
      <BixNavbar logo={logo} onRedirect={(e?: string) => navigate(e || '/')} />

      <section>
        <CreatePost />
      </section>
    </IndexStyled>
  );
};

export default Index;
