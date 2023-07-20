import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CollapseWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 20px 10% 0 10%;
  width: 80%;
`;

const CollapseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: white;
  background-color: #FF6060;
  cursor: pointer;
`;

const CollapseButton = styled.button`
  border: none;
  color: white;
  background: none;
  cursor: pointer;
  transition: transform 0.9s ease;
  transform-origin: center;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'rotate(180deg)')};
`;

const CollapseContent = styled.div`
  color: #ff6060;
  background-color: #f6f6f6;
  border-radius: 5px;
  overflow: hidden;
  transition: height ease 0.9s;
  height: ${({ isOpen }) => (isOpen ? '100px' : '0px')};
  display: flex;
  align-items: center;
`;

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseWrapper>
      <CollapseHeader onClick={toggleCollapse}>
        {title}
        <CollapseButton isOpen={isOpen}>{isOpen ? '▲' : '▼'}</CollapseButton>
      </CollapseHeader>
      <CollapseContent isOpen={isOpen}>
        <div className="content">{content}</div>
      </CollapseContent>
    </CollapseWrapper>
  );
}

CollapseItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default CollapseItem;
