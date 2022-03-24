import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';

import searchIcon from '../assets/icons/search.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: min(100%, 25rem);
    
`;

const SearchBar = styled.div`
    position: relative;
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    height: 100%;
    box-shadow: 2px 2px 10px var(--shadow-dark);
    outline: none;
    padding: 0 3.5rem;
    font-family: 'NunitoSans Regular';
`;

const ImgSearch = styled.img`
    position: absolute;
    left: 1.5rem;
`;


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: ''
        }
    }

    searchInputHandler = (e) => {
        const { searchCountry } = this.props;
        this.setState({
            searchInputValue: e.target.value,
        }, () => { searchCountry(this.state.searchInputValue) });
    }


    render() {
        const { filterCountry, inputRefs } = this.props;
        return (
            <Container>
                <SearchBar>
                    <ImgSearch src={searchIcon} className="icon-sm" />
                    <SearchInput ref={inputRefs} className="rounded" type="text" placeholder="Search for a country..." onChange={this.searchInputHandler} />
                </SearchBar>
                <Filter filterCountry={filterCountry} />
            </Container>
        );
    }
}

export default Search;