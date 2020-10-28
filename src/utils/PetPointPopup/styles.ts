import styled from 'styled-components';
import { Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

export const StyledPopup = styled(Popup).attrs(() => ({
  closeButton: false,
  minWidth: 240,
  maxWidth: 240,
}))`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: none;
`;

export const StyledPopupContainer = styled.div`
  color: #0089a5;
  font-size: 20px;
  font-weight: bold;
  margin: 8px 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPopupLink = styled(Link).attrs(() => ({
  to: '/',
}))`
  width: 40px;
  height: 40px;
  background: #28df99;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
