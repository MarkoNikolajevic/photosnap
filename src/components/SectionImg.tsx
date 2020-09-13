import React from 'react';
import styled from 'styled-components';

const SectionImg = styled.div`
  height: 18.375rem;
  width: 100%;
  background-image: url(${require(`../assets/home/mobile/create-and-share.jpg`)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default () => {
  return <SectionImg />;
};
