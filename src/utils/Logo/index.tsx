import React from 'react';

import { Container, LogoImg, TitleLogo } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoImg />
      <TitleLogo>CPSPets</TitleLogo>
    </Container>
  );
};

export default Logo;
