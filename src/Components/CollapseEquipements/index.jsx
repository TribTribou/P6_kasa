import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DownFlatArrow from '../../assets/Down-flat-arrow.svg';

const CollapseWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 20px;
  width: 100%;
`;

const CollapseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: white;
  background-color: #FF6060;
  cursor: pointer;
  border-radius: 5px;
`;

const CollapseButton = styled.button`
  border: none;
  color: white;
  background: none;
  cursor: pointer;
  transition: transform 0.9s ease;
  transform-origin: center;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

const CollapseContent = styled.div`
  color: #ff6060;
  background-color: #f6f6f6;
  border-radius: 5px;
  overflow: hidden;
  transition: height ease 0.9s;
  height: ${({ isOpen, itemCount }) => (isOpen ? `${itemCount * 26}px` : '0px')};
  display: flex;
  flex-direction: column;
  font-size: small;
`;

const CollapseIcon = styled.img`
  width: 16px;
  height: 16px;
  transform: ${({ scale }) => `scale(${scale})`};
`;

const EquipementItem = styled.p`
  margin: 5px 0;
`;

function CollapseEquipements({ equipments }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const itemCount = equipments.length;

  return (
    <CollapseWrapper>
      <CollapseHeader onClick={toggleCollapse}>
        Équipements
        <CollapseButton isOpen={isOpen}>
          <CollapseIcon src={DownFlatArrow} scale={2.5} alt={isOpen ? '▼' : '▲'} />
        </CollapseButton>
      </CollapseHeader>
      <CollapseContent isOpen={isOpen} itemCount={itemCount} >
        {equipments.map((equipement, index) => (
          <EquipementItem key={index}>{equipement}</EquipementItem>
        ))}
      </CollapseContent>
    </CollapseWrapper>
  );
}

CollapseEquipements.propTypes = {
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CollapseEquipements;