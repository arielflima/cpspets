import React from 'react';

import {
  Container,
  Aside,
  AsideHeader,
  ContentLogo,
  Logo,
  TitleLogo,
  AsideTitle1,
  AsideTitle2,
  AsideFooter,
  AsideCity,
  AsideState,
} from './styles';

const PetsMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <AsideHeader>
          <ContentLogo>
            <Logo /> <TitleLogo>CPSPets</TitleLogo>
          </ContentLogo>
          <AsideTitle1>Escolha uma entidade no mapa</AsideTitle1>
          <AsideTitle2>Seu próximo pet está esperando você</AsideTitle2>
        </AsideHeader>
        <AsideFooter>
          <AsideCity>Campinas</AsideCity>
          <AsideState>Campinas</AsideState>
        </AsideFooter>
      </Aside>
    </Container>
  );
};

export default PetsMap;
