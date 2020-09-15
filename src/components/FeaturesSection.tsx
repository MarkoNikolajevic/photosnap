import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 2rem;
`;

export default (props: { children: any }) => {
  return <FeaturesSection>{props.children}</FeaturesSection>;
};
