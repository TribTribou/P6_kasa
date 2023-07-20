import React from 'react';
import Thumb from '../../Components/Thumb';
import logements from '../../assets/logements.json'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeBanner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 5%;
  max-width: 100%;
  max-height:20%;
`;

const HomeBannerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: brightness(0.6);
`;

const HomeSlogan = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate( -50%, -50%);
  padding: 1.5vw 3vw;
  color: white;
  font-size: 2em;
  max-width: 90%;
  text-align: center;
  white-space: nowrap;
`;

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 10px;
`;

const ThumbWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  aspect-ratio: 1/1;
`;

function Home() {
  const thumbsToShow = logements.slice(0, 6); // Limite l'affichage à 6 thumbs maximum

  return (
    <div>
      <HomeBanner>
        <HomeBannerImage src="./HomeBannerImg.jpg" alt="Paysage illustratif" />
        <HomeSlogan>Chez vous, partout et ailleurs</HomeSlogan>
      </HomeBanner>
      <HomeWrapper>
        {thumbsToShow.map((logement) => (
          <ThumbWrapper key={logement.id}>
          <Link to={`/logement/${logement.id}`}>
            <Thumb logement={logement} />
          </Link>
        </ThumbWrapper>
        ))}
      </HomeWrapper>
    </div>
  );
}

export default Home;