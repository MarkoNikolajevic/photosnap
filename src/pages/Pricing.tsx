import React from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import SectionImg from '../components/SectionImg';
import SectionText from '../components/SectionText';

const Pricing = styled.div`
  .grid {
    div:nth-child(1) {
      background-image: url(${require(`../assets/pricing/mobile/hero.jpg`)});
    }
  }
`;

export default () => {
  return (
    <Pricing>
      <Grid>
        <SectionImg />
        <SectionText
          headingText='Pricing'
          paragraph='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        ></SectionText>
      </Grid>
    </Pricing>
  );
};
