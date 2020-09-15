import React, { useState } from 'react';
import styled from 'styled-components';

const FeaturesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 3.5rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  h3 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.typography.h3.size};
    letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
    line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  }

  p {
    color: rgba(0, 0, 0, 0.5);
    font-size: ${({ theme }) => theme.typography.body.size};
    letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
  }
`;

export default (props: {
  icon: string;
  altText: string;
  title: string;
  info: string;
}) => {
  const [icon] = useState(props.icon);
  const [altText] = useState(props.altText);
  const [title] = useState(props.title);
  const [info] = useState(props.info);

  return (
    <FeaturesCard>
      <img src={icon} alt={altText} />
      <h3>{title}</h3>
      <p>{info}</p>
    </FeaturesCard>
  );
};
