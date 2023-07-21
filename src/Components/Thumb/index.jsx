import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ThumbWrapper = styled.div`
  background-color: #FF6060;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  height: 90%;
`;

const ThumbImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ThumbTitle = styled.h2`
  color: white;
  font-size: small;
  max-width: 50%;
`;



function Thumb({ logement }) {
  return (
    <ThumbWrapper>
      <Link to={`/logement/${logement.id}`}>
        <ThumbImage src={logement.cover} alt={logement.title} />
        <ThumbTitle>{logement.title}</ThumbTitle>
      </Link>
    </ThumbWrapper>
  );
}
  
  export default Thumb;