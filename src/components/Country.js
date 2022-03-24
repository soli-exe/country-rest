import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: max(80%, 17rem);
    heigh: max-content;
    background-color: var(--ele-light);
    box-shadow: 2px 2px 10px var(--shadow-dark);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 375px) {
        width: 100%;
    }
`;

const Img = styled.img` /* Country Image */
    width: 100%;
    object-fit: contain;
`;

const Section = styled.section` /* Country details part */
    width: 100%;
    padding: 1.5rem;
    height: max-content;
    display: inline-block;
`;

const H4 = styled.h4` /* Country Name */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: calc(.6em + 1vh);
    margin-bottom: 1rem;
    font-family: 'NunitoSans ExtraBold';
    width: 100%;

    @media (max-width: 375px) {
        font-size: calc(.5em + .8vh);
    }
`;

const Ul = styled.ul` /* Country details list */
    font-family: 'NunitoSans SemiBold';
    list-style-type: none;
    margin-bottom: 2rem;
    height: max-content;
    width: max-content;
    li {
        &:not(last-child){
            margin-bottom: .5rem;
        }    

        span {
            font-family: 'NunitoSans Light';
        }
    }

`;

const Footer = styled.footer`
    display: flex;
    width: 100%;
    padding: 0 1rem 1rem 0;
    justify-content: flex-end;
    height: max-content;
    margin-top: auto;
`;

const Button = styled.button`
    display: flex;  
    align-items: center;
    user-select: none;
    padding: .5rem 1.5rem;
    border: none;
    width: max-content;
    cursor: pointer;
    font-family: 'NunitoSans SemiBold';
    background-color: var(--ele-light);
    box-shadow: 0 0 10px var(--shadow-darker);
`;

class Country extends Component {


    render() {
        const { name: { common }, population, region, capital, flags } = this.props.countryInfo;
        let formattedPopulation = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return (
            <Container className="rounded">
                <Img style={{ borderRadius: '4px 4px 0 0' }} src={flags.svg} alt="Country Image" />
                <Section>
                    <H4>{common}</H4>
                    <Ul>
                        <li>Population: <span>{formattedPopulation}</span> </li>
                        <li>Region: <span>{region}</span></li>
                        <li>Cpital: <span>{capital}</span></li>
                    </Ul>
                </Section>
                <Footer>
                    <Link to={`/country/${common}`} className="rounded btn">
                        See More
                    </Link>
                </Footer>
            </Container>
        );
    }
}

export default Country;
export { Button, Section, Ul, H4 };