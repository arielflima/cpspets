import styled from 'styled-components';

import { Link } from 'react-router-dom';

import landing from '../../assets/landing.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #28df99 0%, #4fef8f 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  /* background: url('../../images/landing.svg') no-repeat 80% center; */
`;

export const Aside = styled.div`
  max-width: 350px;
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const Title2 = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const ImgLanding = styled.img.attrs(() => ({
  src: landing,
  alt: 'PetsCPS',
}))`
  width: 660px;
  height: 500px;

  margin-left: 40px;
  margin-bottom: 100px;
`;

export const ButtonToHome = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #f6af3e;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;

  border: transparent;

  transition: background-color 0.2s;

  &:hover {
    background: #28df99;
  }
`;

export const ContentLocation = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 0;
  top: 0;

  margin-top: 110px;
`;

export const City = styled.h2`
  font-weight: bold;
`;

export const State = styled.h3``;
