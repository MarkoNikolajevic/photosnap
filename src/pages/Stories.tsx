import React from 'react';
import styled from 'styled-components';

import Grid from '../components/Grid';
import StoryCard from '../components/StoryCard';

const Stories = styled.div``;

export default () => {
  return (
    // TODO try to use loop to render story cards
    <Stories>
      <Grid>
        <StoryCard
          date='April 16th 2020'
          title='The mountains'
          author='by John Appleseed'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/mountains.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/mountains.jpg')}`}
              alt='mountains'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='April 14th 2020'
          title='Sunset Cityscapes'
          author='by Benjamin Cruz'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/cityscapes.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/cityscapes.jpg')}`}
              alt='cityscapes'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='April 11th 2020'
          title='18 Days Voyage'
          author='by Alexei Borodin'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/18-days-voyage.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/18-days-voyage.jpg')}`}
              alt='man walinkg at sunset'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='April 7th 2020'
          title='World Tour 2019'
          author='by Tirrmothy Wagner'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/world-tour.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/world-tour.jpg')}`}
              alt='lake'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='April 3rd 2020'
          title='Unforeseen Corners'
          author='by William Malcolm'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/unforeseen-corners.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/unforeseen-corners.jpg')}`}
              alt='tree'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 29th 2020'
          title='King on Africa: Part II'
          author='by Tim Hillenburg'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/king-on-africa.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/king-on-africa.jpg')}`}
              alt='lion'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='Marcg 21st 2020'
          title='The Trip to Nowhere'
          author='by Felicia Rourke'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/trip-to-nowhere.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/trip-to-nowhere.jpg')}`}
              alt='tree by water'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 19th 2020'
          title='Rage of The Sea'
          author='by Mohammed Abdul'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/rage-of-the-sea.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/rage-of-the-sea.jpg')}`}
              alt='sea'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 16th 2020'
          title='Running Free'
          author='by Michelle'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/running-free.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/running-free.jpg')}`}
              alt='horses run'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 11th 2020'
          title='Behind the Waves'
          author='by Lamarr Wilson'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/behind-the-waves.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/behind-the-waves.jpg')}`}
              alt='building'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 9th 2020'
          title='Calm Waters'
          author='by Samantha Brooke'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/calm-waters.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/calm-waters.jpg')}`}
              alt='hills'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 5th 2020'
          title='The Milky Way'
          author='by Benjamin Cruz'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/milky-way.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/milky-way.jpg')}`}
              alt='milky way'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 4th 2020'
          title='Night at The Dark Forest'
          author='by Mohammed Abdul'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/dark-forest.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/dark-forest.jpg')}`}
              alt='forest'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='March 1st 2020'
          title="Somwarpet's Beauty"
          author='by Michelle'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/somwarpet.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/somwarpet.jpg')}`}
              alt='somwarpet'
            />
          </picture>
        </StoryCard>
        <StoryCard
          date='February 25th 2020'
          title='Land of Dreams'
          author='by William Malcolm'
        >
          <picture>
            <source
              media='(min-width: 48rem)'
              srcSet={`${require('../assets/stories/desktop/land-of-dreams.jpg')}`}
            />
            <img
              src={`${require('../assets/stories/mobile/land-of-dreams.jpg')}`}
              alt='land of dreams'
            />
          </picture>
        </StoryCard>
      </Grid>
    </Stories>
  );
};
