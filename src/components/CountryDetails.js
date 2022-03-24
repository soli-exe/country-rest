import React, { Component } from 'react';
import styled from 'styled-components';
import { Ul, H4 } from './Country';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import axios from 'axios';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import { v4 } from 'uuid';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    padding: 1rem 0;
    @media(min-width: 1444px){
        height: max-content;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        section {
            margin-left: 3rem;
        }

        img {
            margin: 0;
        }
    }
`;

const Section = styled.section`
    display: flex;
    width: min(100%, 35rem);
    flex-direction: row;
    flex-wrap: wrap;
    ul {
        &:nth-child(2){
            margin-right: 5rem;
        }
    }
`;

const Header = styled.header`
    width: 100%;
    margin: 2rem 0;
    @media(min-width: 768px){
      padding: 0 5rem;
    }
`;

const Img = styled.img`
    width: min(100%, 35rem);
    height: min(100%, 20rem);
    object-fit: contain;
    margin-bottom: 3rem;

    @media(min-width: 768px){
        object-fit: contain;
    }
`;

const Div = styled.div`
    display: inline-block;
    width: 100%;
    height: max-content;
`;

const H5 = styled.h4`
    font-family: 'NunitoSans SemiBold';
    margin-bottom: 1rem;
`;

const Ol = styled.ol`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: max-content;

    li {
        &:not(last-child){
            margin-right: .5rem;
            margin-bottom: .5rem;
        }
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: 'NunitoSans Light';
        font-size: 11pt;
        padding: .3rem 1rem;
        flex: 1 0 auto;
        text-align: center;
        max-width: 8rem;
        box-shadow: 0 0 10px var(--shadow-dark);
        background-color: var(--ele-light);
    }

`;

class CountryDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryInfo: []
        }
    }

    getCountryDetails = () => {
        axios.get(`https://restcountries.com/v3.1/name/${this.props.match.params.name}`)
            .then(res => this.setState({
                countryInfo: [...res.data]
            }))
    }

    componentDidMount() {
        this.getCountryDetails();

    }

    render() {
        const { countryInfo } = this.state;
        if (countryInfo.length > 0) {
            const { name, name: { common }, population, region, capital, subregion, flags, languages, tld, currencies, borders } = countryInfo[0];
            const language = Object.keys(languages)[0];
            const currency = Object.keys(currencies)[0];
            const extractedLanguages = Object.values(languages).join(',');
            const topLevelDomains = tld.join(',');
            const extractedCurrencies = Object.values(currencies[currency]).join(" ");
            const countryBorders = [];
            if (borders) {
                let countryName = new Intl.DisplayNames(['en'], { type: 'language' })
                borders.forEach(border => {
                    countryBorders.push(countryName.of(border))

                });
            }
            return (
                <>
                    <Header>
                        <Link to='/' className='btn rounded'>
                            <img style={{ marginRight: '8px' }} className='icon-sm' src={arrowLeftIcon} />Back
                        </Link>
                    </Header>
                    <Container>
                        <Img src={flags.svg} className="rounded" alt="Country image" />
                        <Section>
                            <H4 style={{ fontSize: 'calc(.8em + 1.1vh)' }} >{common}</H4>
                            <Ul>
                                <li>Native Name: <span>{name.nativeName[language].common}</span> </li>
                                <li>Population: <span>{population}</span> </li>
                                <li>Region: <span>{region}</span></li>
                                <li>Cpital: <span>{capital}</span></li>
                                <li>Sub Region: <span>{subregion}</span></li>
                            </Ul>
                            <Ul>
                                <li>Top Level Domain: <span>{topLevelDomains}</span></li>
                                <li>Currencies: <span> {extractedCurrencies} </span></li>
                                <li>Languages: <span>{extractedLanguages}</span></li>
                            </Ul>
                            <Div>

                                {borders ? <H5>Border Countries:</H5> : null}
                                <Ol>
                                    {countryBorders.map(border => <li key={v4()} className='rounded'>{border}</li>)}
                                </Ol>
                            </Div>
                        </Section>
                    </Container>
                </>
            );
        }
        return (
            <ReactLoading type='spin' color='#202c37' width='45px' className='loading' />
        )
    }
}

export default CountryDetails;