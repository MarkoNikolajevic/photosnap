import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonLink from './ButtonLink';

const StoryCard = styled.div`
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  .info-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    color: ${({ theme }) => theme.colors.white};
    padding: 0 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    h3 {
      font-size: ${({ theme }) => theme.typography.h3.size};
      line-height: ${({ theme }) => theme.typography.h3.lineHeight};
      letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
    }

    p {
      font-size: 0.8125rem;
      letter-spacing: 0px;
    }

    button {
      a {
        width: 100%;
        justify-content: space-between;
      }
    }

    @media screen and (min-width: 48rem) {
      padding: 0 2.625rem 2.625rem;
    }
  }
`;

export default (props: {
  children: any;
  date?: string;
  title: string;
  author: string;
}) => {
  const [date] = useState(props.date);
  const [title] = useState(props.title);
  const [author] = useState(props.author);

  return (
    <StoryCard>
      {props.children}
      {/* use picture tag as children */}
      <div className='info-container'>
        <p>{`${date}`}</p>
        <h3>{`${title}`}</h3>
        <p>{`${author}`}</p>
        <ButtonLink label='Read story' link='stories' />
      </div>
    </StoryCard>
  );
};
