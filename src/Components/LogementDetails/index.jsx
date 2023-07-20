import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogementDetailsWrapper = styled.div`
  /* Ajoute ici les styles du wrapper de la page de détails du logement */
`;

const CoverImage = styled.img`
  /* Ajoute ici les styles de l'image de couverture du logement */
`;

const Title = styled.h1`
  /* Ajoute ici les styles du titre du logement */
`;

const Location = styled.p`
  /* Ajoute ici les styles de la localisation du logement */
`;

const Tags = styled.div`
  /* Ajoute ici les styles des tags du logement */
`;

const DescriptionCollapse = styled.div`
color: #ff6060;
background-color: #f6f6f6;
border-radius: 5px;
overflow: hidden;
transition: height ease 0.9s;
height: ${({ isOpen }) => (isOpen ? '100px' : '0px')};
display: flex;
align-items: center;
`;

const EquipmentsCollapse = styled.div`
color: #ff6060;
background-color: #f6f6f6;
border-radius: 5px;
overflow: hidden;
transition: height ease 0.9s;
height: ${({ isOpen }) => (isOpen ? '100px' : '0px')};
display: flex;
align-items: center;
`;

const HostWrapper = styled.div`
  /* Ajoute ici les styles du wrapper pour les informations du propriétaire */
`;

const HostName = styled.p`
  /* Ajoute ici les styles du nom du propriétaire */
`;

const HostImage = styled.img`
  /* Ajoute ici les styles de l'image de profil du propriétaire */
`;

const Ratings = styled.div`
  /* Ajoute ici les styles de la notation en étoiles */
`;

function LogementDetails({ logement }) {
  // Ici, logement est l'objet contenant toutes les informations du logement sélectionné.
  // Tu peux l'utiliser pour afficher les détails du logement dans le composant.

  return (
    <LogementDetailsWrapper>
      <CoverImage src={logement.cover} alt={logement.title} />
      <Title>{logement.title}</Title>
      <Location>{logement.location}</Location>
      <Tags>{logement.tags}</Tags>
      <DescriptionCollapse>
        {logement.description}
      </DescriptionCollapse>
      <EquipmentsCollapse>
        {logement.equipements}
      </EquipmentsCollapse>
      <HostWrapper>
        <HostName>{logement.host.name}</HostName>
        <HostImage src={logement.host.picture} alt={logement.host.name} />
      </HostWrapper>
      <Ratings>
        {logement.ratings}
      </Ratings>
    </LogementDetailsWrapper>
  );
}

LogementDetails.propTypes = {
  logement: PropTypes.object.isRequired,
};

export default LogementDetails;
