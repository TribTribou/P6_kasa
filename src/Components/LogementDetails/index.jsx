import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RatingStars from '../RatingStars';
import CollapseItem from '../CollapseItem';
import CollapseEquipements from '../CollapseEquipements';
import LeftFlatArrow from '../../assets/Left-flat-arrow.svg';
import RightFlatArrow from '../../assets/Right-flat-arrow.svg';

const LogementDetailsWrapper = styled.div`
width:100%;
max-width: 1250px;
padding: 20px;
border-radius: 20px;
display: flex;
flex-direction: column;
margin: 0 auto; /* Centre horizontalement le conteneur */
text-align: center;

  @media screen and (max-width: 767px) {
    padding:0;
    margin: 0 0 0 5%;
    font-size: x-small;
  }
`;

const CarouselWrapper = styled.div`
width:100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`;

const CarouselButton = styled.button`
position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 100px;
  height: 140px;
  background-image: url(${props => props.src}); /* Utilisation de props.src pour définir l'arrière-plan de l'image */
  background-size: cover;
  @media screen and (max-width: 767px) {
    width: 50px;
  height: 70px;
  }
`;

const CarouselButtonPrev = styled(CarouselButton)`
left: -1.5em;
@media screen and (max-width: 767px) {
  left: 0.2em;
}
`;

const CarouselButtonNext = styled(CarouselButton)`
right: 0.5em;
@media screen and (max-width: 767px) {
  right: 1.8em;
}
`;

const CarouselImage = styled.img`
width: 100%;
max-width: 1240px;
max-height: 20em;
object-fit: cover;
border-radius: 20px;
@media screen and (max-width: 767px) {
  height:25em;
  max-width: 90%;
  margin: 0 7.5% 0 2.5%;
}
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items:start;
  }
`;

const TitleLocationWrapper = styled.div`
  margin-top: 3px;
  @media screen and (max-width: 767px) {
    margin:0 0 5% 3%;
  }
`;

const Title = styled.h1`
margin-top: 10px;
  color: #ff6060;
  font-size: large;
  @media screen and (max-width: 767px) {
    font-size: 1em;
  }
`;

const Location = styled.p`
color: #ff6060;
@media screen and (max-width: 767px) {
  font-size: 1.2em;
  position:relative;
}
`;

const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;
@media screen and (max-width: 767px) {
  margin:275px 0 0 2%;
  position:absolute;
  top:1;
  flex-wrap: nowrap;
}
`;

const TagItem = styled.div`
  background-color: #ff6060;
  color: white;
  padding: 5px;
  border-radius: 20px;
  width: 10em;
  text-align: center;
  font-size: x-small;
  @media screen and (max-width: 767px) {
    width:10em;
    font-size: xx-small;
    margin-left: 2%;
  }
`;

const HostRatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-direction: row;
    margin:5% 8% -2%;
  }
`;

const HostWrapper = styled.div`
display: flex;
  align-items: center;
margin-top: 20px;
@media screen and (max-width: 767px) {
  margin:0;
  gap: 15%;
}
`;

const HostName = styled.p`
color: #ff6060;
margin-right: 10px;
@media screen and (max-width: 767px) {
  margin-right:0;
}
`;

const HostImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 5%;
`;

const Ratings = styled.div`
margin-top: 10px;
@media screen and (max-width: 767px) {
  margin: 5% 10em 0 0;
  order:-1;
}
`;

const CollapseContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 10%;
@media screen and (max-width: 767px) {
  flex-direction: column;
  gap:0;
  width:90%;
  margin: 0 2% 0 2%;
  font-size: 1.8em;
}
`;

const CollapseItemContainer = styled.div`
  flex-basis: 45%;
`;

function LogementDetails({ logement }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <LogementDetailsWrapper>
      <CarouselWrapper>
        <CarouselImage src={logement.pictures[currentImageIndex]} alt={logement.title} />
        <CarouselButtonPrev src={LeftFlatArrow}  onClick={handlePrevClick} />
        <CarouselButtonNext src={RightFlatArrow} onClick={handleNextClick} />
      </CarouselWrapper>
      <TitleWrapper>
      <TitleLocationWrapper>
          <Title>{logement.title}</Title>
          <Location>{logement.location}</Location>
        </TitleLocationWrapper>
        <HostRatingsWrapper>
        <HostWrapper>
          <HostName>{logement.host.name}</HostName>
          <HostImage src={logement.host.picture} alt={logement.host.name} />
        </HostWrapper>
        <Ratings>
          <RatingStars value={logement.rating} />
        </Ratings>
      </HostRatingsWrapper>
      </TitleWrapper>
      <Tags>
        {logement.tags.map((tag, index) => (
          <TagItem key={index}>{tag}</TagItem>
        ))}
      </Tags>
      <CollapseContainer>
        <CollapseItemContainer>
          <CollapseItem title="Description" content={logement.description} />
        </CollapseItemContainer>
        <CollapseItemContainer>
          <CollapseEquipements title="Équipements" equipments={logement.equipments} />
        </CollapseItemContainer>
      </CollapseContainer>
    </LogementDetailsWrapper>
  );
}

LogementDetails.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default LogementDetails;