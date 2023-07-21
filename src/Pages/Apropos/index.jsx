import React from 'react';
import styled from 'styled-components';
import CollapseItem from '../../Components/CollapseItem';
const ColumnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 10% 0 10%;
`;

const AproposBanner = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  max-width: 100%;
  max-height:200px;
`;

const AproposBannerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: brightness(0.6);
`;


function Apropos() {
  return (
    <div>
      <AproposBanner>
        <AproposBannerImage src="./AProposImg.jpg" alt="Autre paysage illustratif" />
      </AproposBanner>
      <ColumnWrapper>
        <CollapseItem
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont confirmes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes."
        />
        <CollapseItem
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapseItem
          title="Service"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <CollapseItem
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </ColumnWrapper>
    </div>
  );
}

export default Apropos;