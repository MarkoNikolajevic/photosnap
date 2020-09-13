import React, { useState } from 'react';
import styled from 'styled-components';

const SectionText = styled.div`
  padding: 4.5rem 1.5rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 3.33px;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.typography.body.size};
    line-height: ${({ theme }) => theme.typography.body.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.body.letterSpacing};
    opacity: 0.7;
  }
`;

export default (props: {
  children: any;
  headingText: string;
  paragraph: string;
}) => {
  const [headingText] = useState(props.headingText);
  const [paragraph] = useState(props.paragraph);

  return (
    <SectionText>
      <h1>{`${headingText}`}</h1>
      <p>{`${paragraph}`}</p>
      {props.children}
    </SectionText>
  );
};
