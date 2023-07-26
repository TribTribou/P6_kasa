import React from 'react';
import styled from 'styled-components';
import logoKasaImg2 from '../../assets/logoKasaImg2.png';

const LogoWrapper = styled.div`
  display: inline-block;
  @media screen and (max-width: 767px) {
    font-size: 2em;
  }
`;

const LogoText = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2em;
  margin-bottom: -5px;
`;

const LogoImage = styled.img`
  height: 0.6em;
  margin-right: 5px;
  margin-top: 4px;
`;

function LogoKasaFooter() {
        return (
          <LogoWrapper>
            <LogoText>
              K
              <LogoImage src={logoKasaImg2} alt="Logo Kasa Footer" />
              sa
            </LogoText>
          </LogoWrapper>
        );
      }
 
export default LogoKasaFooter