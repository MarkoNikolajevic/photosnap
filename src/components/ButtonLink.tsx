import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled.button`
  height: 1rem;
  background: transparent;
  border: none;
  margin-top: 1.5rem;
  display: flex;
  transition: all 300ms ease-in-out;

  &:hover a {
    text-decoration: underline;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.h4.size};
    line-height: ${({ theme }) => theme.typography.h4.lineHeight};
    letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
    font-weight: ${({ theme }) => theme.typography.bold};
    transition: all 300ms ease-in-out;
    display: flex;
    align-items: center;

    svg {
      margin-left: 1rem;
      fill: ${({ theme }) => theme.colors.white};
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  @media screen and (min-width: 48rem) {
    margin-top: 3rem;
  }
`;

export default (props: { link: string; label: string }) => {
  const [link] = useState(props.link);
  const [label] = useState(props.label);

  return (
    <ButtonLink>
      <Link to={`/${link}`}>
        {`${label}`}
        <svg xmlns='http://www.w3.org/2000/svg' width='43' height='14'>
          <g fill='none' fillRule='evenodd'>
            <path d='M0 7h41.864M35.428 1l6 6-6 6' />
          </g>
        </svg>
      </Link>
    </ButtonLink>
  );
};
