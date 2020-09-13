import React from 'react';
import styled from 'styled-components';

import logo from '../assets/shared/desktop/logo.svg';
import menu from '../assets/shared/mobile/menu.svg';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
  padding: 0 1.5rem;
`;

export default () => {
  return (
    <Navbar>
      <img src={logo} alt='Photosnap logo' />
      <img src={menu} alt='menu icon' />
    </Navbar>
  );
};
