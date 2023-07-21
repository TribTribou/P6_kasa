import React from 'react';
import LogementDetails from '../../Components/LogementDetails';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../assets/logements.json'
import Error from '../Error';

function DetailsPage() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div>
      <LogementDetails logement={logement} />
    </div>
  );
}

export default DetailsPage;