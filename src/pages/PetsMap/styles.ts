import styled from 'styled-components';
import logo from '../../assets/logo.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const Aside = styled.aside`
  width: 400px;
  background: linear-gradient(329.54deg, #28df99 0%, #4fef8f 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AsideHeader = styled.aside``;

export const ContentLogo = styled.div`
  flex: 1;
  display: flex;
  margin-left: -20px;
  margin-bottom: 12px;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
}))`
  width: 100px;
  height: 85px;
`;

export const TitleLogo = styled.h1`
  margin-left: -18px;
  font-size: 30px;
  font-weight: 900;
  line-height: 70px;
`;

export const AsideTitle1 = styled.h3`
  font-size: 34px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const AsideTitle2 = styled.h3`
  line-height: 28px;
  margin-top: 24px;
`;

export const AsideFooter = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const AsideCity = styled.h2`
  font-weight: 700;
`;

export const AsideState = styled.h3`
  font-weight: 500;
`;
