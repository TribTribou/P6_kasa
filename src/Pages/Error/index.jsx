import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  text-align: center;
  color: #FF6060;
`;

const ErrorTitle = styled.h1`
  font-size: 10em;
  margin-bottom: 12%;
  margin-top: -1%;
`;

const ErrorMessage = styled.p`
  font-size: 2em;
`;

const HomeLink = styled(Link)`
  display: block;
  color: #FF6060;
  font-size: 0.8em;
  margin-top: 12%;
  margin-bottom: 12%;
  text-decoration: underline;
  text-decoration-color: #FF6060;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <HomeLink to="/">Retourner sur la page d'accueil</HomeLink>
    </ErrorContainer>
  );
}

 
export default Error