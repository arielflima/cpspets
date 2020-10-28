import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { StyledPopup, StyledPopupContainer, StyledPopupLink } from './styles';

interface IPetProintPropup {
  name: string;
}

const PetPointPopup: React.FC<IPetProintPropup> = ({ name }) => {
  return (
    <StyledPopup closeButton={false} minWidth={240} maxWidth={240}>
      <StyledPopupContainer>
        {name}
        <StyledPopupLink to="/">
          <FiArrowRight size={20} color="#fff" />
        </StyledPopupLink>
      </StyledPopupContainer>
    </StyledPopup>
  );
};

export default PetPointPopup;
