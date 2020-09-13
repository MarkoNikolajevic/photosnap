import React from 'react';
import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

export default (props: { children: any }) => {
  return <Grid>{props.children}</Grid>;
};
