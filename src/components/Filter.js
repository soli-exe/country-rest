import React, { Component } from 'react';
import styled from 'styled-components';

import chevronDownIcon from '../assets/icons/chevron-down.svg';

const Select = styled.select`
    background-color: unset;
    width: 100%;
    height: 100%;
    padding: 0 0 0 1.5rem;
    border: none;
    font-family: 'NunitoSans SemiBold';
    z-index: 21;

    &:focus {
        outline: none;
    }
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--ele-light);
    box-shadow: 2px 2px 10px var(--shadow-dark);
    position: relative;
    margin: 1rem 0;
    width: 100%;
    height: 3rem;
`;

const Img = styled.img`
    position: absolute;
    right: 1.5rem;
    z-index: 22;
`;


export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: 'all'
        }
    }

    selectOptionHnadler = (e) => {
        this.setState({
            filterValue: e.target.value
        }, () => { this.props.filterCountry(this.state.filterValue) })
    }


    render() {
        return (
            <Div className='rounded'>
                <Select onChange={this.selectOptionHnadler} className='selectReset'>
                    <option value="" hidden={true}>
                        Filter by region
                    </option>
                    <option value="all">All</option>
                    <option value='africa' >Africa</option>
                    <option value='america' >America</option>
                    <option value='asia' >Asia</option>
                    <option value='europe' >Europe</option>
                    <option value='oceania' >Oceania</option>
                </Select>
                <Img className='icon-sm' src={chevronDownIcon} />
            </Div>


        )
    }
}
