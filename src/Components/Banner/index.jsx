import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Accueil from '../Accueil';
import APropos from '../APropos';
import LogoKasa from '../LogoKasa';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.red};
  margin-top: -10%;
`;

const NavItem = styled(Link)`
  color: ${({ theme }) => theme.red};
  margin-left: 10px;
  ${({ active }) => active && 'text-decoration: underline;'}
  text-decoration-color: red;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;


function Banner() {
  const location = useLocation();
  return (
    <Nav>
        <LogoKasa />
      <TextWrapper>
      <NavItem to="/" active={location.pathname === '/'}>
        <Accueil />
      </NavItem>
      <NavItem to="/a-propos" active={location.pathname === '/a-propos'}>
      <APropos />
      </NavItem>
      </TextWrapper>
    </Nav>
  );
}

export default Banner;