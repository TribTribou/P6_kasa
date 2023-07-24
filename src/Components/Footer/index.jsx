import React from 'react';
import LogoKasaFooter from "../LogoKasaFooter"
import styled from 'styled-components';

const FooterWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  background-color: #000000;
  margin: 5% -5%;
  @media screen and (max-width: 767px) {
    h2 {
      white-space: pre-line;
      text-align: center;
      width:30%;
      font-size: x-small;
      margin: 2% 0 10% 0;
    }
  }
  `;

function Footer() {
    return (
    <FooterWrapper>
        <LogoKasaFooter/>
        <h2>© 2020 Kasa. All rights reserved</h2>
    </FooterWrapper>
    )
}
 
export default Footer