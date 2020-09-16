import React from 'react';
import styled from 'styled-components';

const SectionImg = styled.div`
  height: 18.375rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 48rem) {
    height: auto;
  }
`;

export default () => {
  return <SectionImg />;
};
