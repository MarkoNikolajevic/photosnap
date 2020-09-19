import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 2rem;

  @media screen and (min-width: 48rem) {
    padding: 7.5rem 9.75rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default (props: { children: any }) => {
  return <FeaturesSection>{props.children}</FeaturesSection>;
};
