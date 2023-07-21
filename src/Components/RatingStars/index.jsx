import React, { useState } from 'react';
import styled from 'styled-components';

const RatingStarsWrapper = styled.div`
  display: inline-block;
`;

const StarIcon = styled.span`
  font-size: 1.5rem;
  color: ${({ active }) => (active ? '#ff6060' : '#ccc')};
`;

function RatingStars({ value }) {
  const [activeStars, setActiveStars] = useState(value);

  const handleMouseEnter = (starIndex) => {
    setActiveStars(starIndex);
  };

  const handleMouseLeave = () => {
    setActiveStars(value);
  };

  return (
    <RatingStarsWrapper>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <StarIcon
          key={starIndex}
          active={starIndex <= activeStars}
          onMouseEnter={() => handleMouseEnter(starIndex)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </StarIcon>
      ))}
    </RatingStarsWrapper>
  );
}

export default RatingStars;
