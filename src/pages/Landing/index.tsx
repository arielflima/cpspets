import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import {
  Container,
  Content,
  Aside,
  Title,
  Title2,
  ImgLanding,
  ButtonToHome,
  ContentLogo,
  Logo,
  TitleLogo,
  ContentLocation,
  City,
  State,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Aside>
          <ContentLogo>
            <Logo /> <TitleLogo>CPSPets</TitleLogo>
          </ContentLogo>
          <Title>Leve alegria para um animalzinho</Title>
          <Title2>Arrume um amigo pra vida toda.</Title2>
        </Aside>
        <ImgLanding />
        <ContentLocation>
          <City>Campinas</City>
          <State>São Paulo</State>
        </ContentLocation>

        <ButtonToHome to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </ButtonToHome>
      </Content>
    </Container>
  );
};

export default Landing;
