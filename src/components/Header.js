import React, { Component } from 'react';
import styled from 'styled-components';
import moonIcon from '../assets/icons/sun.svg';

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  font-family: 'NunitoSans ExtraBold';
  background-color: var(--ele-light);
  box-shadow: 0 2px 10px var(--shadow-dark);

  @media (min-width: 768px) {
      padding: 1rem 6rem;
  }
`;


class Header extends Component {
    render() {
        return (
            <MainHeader>
                <h4>Where in the world?</h4>
            </MainHeader>
        );
    }
}

export default Header;