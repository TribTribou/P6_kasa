import React, { useState } from 'react';
import LogementDetails from '../../Components/LogementDetails';
import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json'

function DetailsPage() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <LogementDetails logement={logement} />
    </div>
  );
}

export default DetailsPage;

