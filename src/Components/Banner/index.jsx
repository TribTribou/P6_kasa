import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Accueil from '../Accueil';
import Apropos from '../Apropos';
import LogoKasa from '../LogoKasa';
import styled from 'styled-components';

const BannerWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ff6060;
  margin-top: -10%;
`;

const AccueilLink = styled(Link)`
  color: #ff6060;
  margin-left: 10px;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  text-decoration-color: red;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;


function Banner() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <BannerWrapper>
        <LogoKasa />
      <TextWrapper>
        <AccueilLink to="/" isActive={isHome}>
          <Accueil />
        </AccueilLink>
        <Apropos />
      </TextWrapper>
    </BannerWrapper>
  );
}

export default Banner;