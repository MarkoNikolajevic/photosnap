import React from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import SectionImg from '../components/SectionImg';
import SectionText from '../components/SectionText';
import FeaturesSection from '../components/FeaturesSection';
import FeaturesCard from '../components/FeaturesCard';
import ButtonLink from '../components/ButtonLink';

const Features = styled.div`
  .grid {
    div:nth-child(1) {
      background-image: url(${require(`../assets/features/mobile/hero.jpg`)});
    }
  }

  .features-beta {
    background-image: url(${require(`../assets/shared/mobile/bg-beta.jpg`)});
  }
`;

export default () => {
  return (
    <Features>
      <Grid>
        <SectionImg />
        <SectionText
          headingText='Features'
          paragraph='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        ></SectionText>
      </Grid>
      <FeaturesSection>
        <FeaturesCard
          icon={`${require('../assets/features/desktop/responsive.svg')}`}
          altText='responsive icon'
          title='100% Responsive'
          info='No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        />
        <FeaturesCard
          icon={`${require('../assets/features/desktop/no-limit.svg')}`}
          altText='no upload limit icon'
          title='No Photo Upload Limit'
          info='Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        />
        <FeaturesCard
          icon={`${require('../assets/features/desktop/embed.svg')}`}
          altText='embed icon'
          title='Available to Embed'
          info='Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
        />
        <FeaturesCard
          icon={`${require('../assets/features/desktop/custom-domain.svg')}`}
          altText='custom domain icon'
          title='Custom Domain'
          info='With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
        />
        <FeaturesCard
          icon={`${require('../assets/features/desktop/boost-exposure.svg')}`}
          altText='boost exposure'
          title='Boost Your Exposure'
          info='Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
        />
        <FeaturesCard
          icon={`${require('../assets/features/desktop/drag-drop.svg')}`}
          altText='drag and drop'
          title='Drag & Drop Image'
          info='Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.'
        />
      </FeaturesSection>
      <SectionText
        class='features-beta'
        headingText='We’re in beta. Get your invite today!'
        paragraph=''
      >
        <ButtonLink label='View the stories' link='stories' />
      </SectionText>
    </Features>
  );
};
