import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  flex: 1;
  display: flex;
  margin-left: -20px;
  margin-bottom: 12px;
`;

export const LogoImg = styled.img.attrs(() => ({
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
