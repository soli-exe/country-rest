import React, { Component } from 'react';
import styled from 'styled-components';
import Country from './Country';
import { v4 } from 'uuid';

const CountryContainer = styled.main`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    width: 100%;
    overflow: auto;
    height: calc(80vh - 6rem);
    scroll-behavior: smooth;
    padding: 2rem;

    @media (max-width: 375px) {
        padding: 2rem 1rem;
    }

    @media(max-width: 780px){
        width: min(100%, 35rem)
    }
`;

export default class Countries extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        const country = this.props.allCountries.map((countryInfo) => {
            return <Country countryInfo={countryInfo} key={v4()} />
        })
        return (
            <CountryContainer>
                {country}
            </CountryContainer>
        )
    }
}
