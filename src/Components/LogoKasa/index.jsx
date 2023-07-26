import React from 'react';
import styled from 'styled-components';
import LogoKasaImg from '../../assets/logoKasaImg.png';

const LogoWrapper = styled.div`
  display: inline-block;
`;

const LogoText = styled.h1`
  display: flex;
  align-items: center;
  font-size: 4em;
`;

const LogoImage = styled.img`
  height: 0.6em; /* ou la hauteur souhaitée en unité appropriée */
  margin-right: 5px; /* ou l'espacement souhaité */
  margin-top: 10px;
`;

function LogoKasa() {

  return (
    <LogoWrapper>
      <LogoText>
        K
        <LogoImage src={LogoKasaImg} alt="Logo Kasa" />
        sa
      </LogoText>
    </LogoWrapper>
  );
}

export default LogoKasa;