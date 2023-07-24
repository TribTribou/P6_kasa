import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RatingStars from '../RatingStars';
import CollapseItem from '../CollapseItem';
import CollapseEquipements from '../CollapseEquipements';

const LogementDetailsWrapper = styled.div`
width:100%;
max-width: 1250px;
background-color: #f6f6f6;
padding: 20px;
border-radius: 20px;
display: flex;
  flex-direction: column;
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
`;

const CarouselButtonPrev = styled(CarouselButton)`
left: -1.5em;
`;

const CarouselButtonNext = styled(CarouselButton)`
right: 0.5em;
`;

const CarouselImage = styled.img`
width: 100%;
max-width: 1240px;
max-height: 20em;
object-fit: cover;
border-radius: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleLocationWrapper = styled.div`
  margin-top: 3px; /* Ajustez cette valeur selon vos préférences */
`;

const Title = styled.h1`
margin-top: 10px;
  color: #ff6060;
  font-size: large;
`;

const Location = styled.p`
color: #ff6060;
`;

const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 10px;
`;

const TagItem = styled.div`
  background-color: #ff6060;
  color: white;
  padding: 5px;
  border-radius: 20px;
  width: 10em;
  text-align: center;
  font-size: x-small;
`;

const HostRatingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HostWrapper = styled.div`
display: flex;
  align-items: center;
margin-top: 20px;
`;

const HostName = styled.p`
color: #ff6060;
margin-right: 10px;
`;

const HostImage = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Ratings = styled.div`
margin-top: 10px;
`;

const CollapseContainer = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 10%;
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
        <CarouselButtonPrev src='../Left-flat-arrow.svg'  onClick={handlePrevClick} />
        <CarouselButtonNext src='../Right-flat-arrow.svg' onClick={handleNextClick} />
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