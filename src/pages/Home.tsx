import React from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import SectionImg from '../components/SectionImg';
import SectionText from '../components/SectionText';
import ButtonLink from '../components/ButtonLink';
import StoryCard from '../components/StoryCard';

const Home = styled.div`
  section:nth-of-type(2) {
    div:nth-child(1) {
      background-image: url(${require(`../assets/home/mobile/beautiful-stories.jpg`)});
    }
    div:nth-child(2) {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};

      a {
        color: ${({ theme }) => theme.colors.black};

        svg {
          fill: ${({ theme }) => theme.colors.black};
          stroke: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
  section:nth-of-type(3) {
    div:nth-child(1) {
      background-image: url(${require(`../assets/home/mobile/designed-for-everyone.jpg`)});
    }
    div:nth-child(2) {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};

      a {
        color: ${({ theme }) => theme.colors.black};

        svg {
          fill: ${({ theme }) => theme.colors.black};
          stroke: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

export default () => {
  return (
    <Home>
      <Grid>
        <SectionImg />
        <SectionText
          headingText='Create and share your photo stories.'
          paragraph='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        >
          <ButtonLink label='Get an invite' link='stories' />
        </SectionText>
      </Grid>
      <Grid>
        <SectionImg />
        <SectionText
          headingText='Beautiful stories every time'
          paragraph='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        >
          <ButtonLink label='View the stories' link='stories' />
        </SectionText>
      </Grid>
      <Grid>
        <SectionImg />
        <SectionText
          headingText='Designed for everyone'
          paragraph='Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
        >
          <ButtonLink label='View the stories' link='stories' />
        </SectionText>
      </Grid>
      <Grid>
        <StoryCard date='' title='The mountains' author='by John Appleseed'>
          <picture>
            <source
              media='(min-width: 1200px)'
              srcSet={`${require('../assets/stories/desktop/mountains.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/mountains.jpg')}`}
              alt='mountains'
            />
          </picture>
        </StoryCard>
        <StoryCard date='' title='Sunset Cityscapes' author='by Benjamin Cruz'>
          <picture>
            <source
              media='(min-width: 1200px)'
              srcSet={`${require('../assets/stories/desktop/cityscapes.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/cityscapes.jpg')}`}
              alt='cityscapes'
            />
          </picture>
        </StoryCard>
        <StoryCard date='' title='18 Days Voyage' author='by Alexei Borodin'>
          <picture>
            <source
              media='(min-width: 1200px)'
              srcSet={`${require('../assets/stories/desktop/18-days-voyage.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/18-days-voyage.jpg')}`}
              alt='man walinkg at sunset'
            />
          </picture>
        </StoryCard>
        <StoryCard date='' title='Architecturals' author='by Samantha Brooke'>
          <picture>
            <source
              media='(min-width: 1200px)'
              srcSet={`${require('../assets/stories/desktop/architecturals.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/architecturals.jpg')}`}
              alt='building'
            />
          </picture>
        </StoryCard>
      </Grid>
    </Home>
  );
};