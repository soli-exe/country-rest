import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import arrowLeftIcon from '../assets/icons/arrow-left.svg';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
`;

const H1 = styled.h1`
    font-family: 'NunitoSans ExtraBold';
    margin-bottom: 2rem;
`;
export default class NotFound extends Component {
    render() {
        return (
            <Div>
                <H1>
                    404, Page Not Found!
                </H1>
                <Link to='/' className='btn rounded'>
                    <img style={{ marginRight: '8px' }} className='icon-sm' src={arrowLeftIcon} />
                    Home page
                </Link>
            </Div>
        )
    }
}
