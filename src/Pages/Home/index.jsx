import React from 'react';
import Thumb from '../../Components/Thumb';
import logements from '../../assets/logements.json'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeBannerImg from '../../assets/HomeBannerImg.jpg';

const HomeBanner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 5%;
  max-width: 100%;
  max-height: 12.5em;
  @media screen and (max-width: 767px) {
    overflow:visible;
    justify-content: center;
    border-radius:5px;
  }
`;

const HomeBannerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: brightness(0.6);
  @media screen and (max-width: 767px) {
    height:8em;
    width:90%;
    border-radius: 10px;
    margin: -5% 0 0 7.5%;
  }
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
  @media screen and (max-width: 767px) {
    font-size:1em;
    padding: 0 0 5% 0;
  }
`;

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #F6F6F6;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    display:flex;
    flex-direction:column;
    gap:0;
    background-color: white;
  }
`;

const ThumbWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  aspect-ratio: 1/1;
`;

function Home() {
  let thumbsToShow = logements.slice(0, 6); // Limite l'affichage à 6 thumbs maximum

  if (window.innerWidth <= 767) {
    thumbsToShow = logements.slice(0, 3); // En mode mobile, affiche seulement 3 thumbs
  }

  return (
    <div>
      <HomeBanner>
        <HomeBannerImage src={HomeBannerImg} alt="Paysage illustratif" />
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