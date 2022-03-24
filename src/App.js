import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import NotFound from './components/NotFound';
import styled from 'styled-components';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Route, Switch, Redirect } from 'react-router-dom';
import './assets/styles/css/App.css';

const MainContainer = styled.main`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1.5rem;

`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      searchResult: [],
    }
    this.searchInputRef = React.createRef(this.searchInputRef);

  }

  componentDidMount() {
    this.getAllCountries()
  }

  getAllCountries = () => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => this.setState(prevState => ({
        allCountries: [...res.data]
      })))
      .catch(err => console.log(err))
  }

  searchCountry = (searchValue) => {
    const capitalizedValue = searchValue.replace(/\b\w/g, str => str.toUpperCase());
    const { allCountries } = this.state;
    let result = allCountries.filter((obj) => obj.name.common.includes(capitalizedValue));

    if (result) {
      this.setState({
        searchResult: [...result]
      })
    }
  }

  filterCountryByRegion = (region) => {
    if (region === 'all') {
      this.getAllCountries();
    } else {
      axios.get(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => this.setState({
          allCountries: [...res.data]
        }))
        .catch(err => console.log(err))
    }
  }

  clearSearch = () => {
    this.setState({
      searchResult: []
    })
    return this.searchInputRef.current.value = ""
  }


  render() {
    const { allCountries, searchResult } = this.state;
    let dataToBeRender = searchResult.length > 0 ? searchResult : allCountries;
    return (
      <>
        <Header />
        <MainContainer>
          <Switch>
            <Route path='/country/:name' component={CountryDetails} />
            <Route path='/404notfound' component={NotFound} />
            <Route exact path='/' render={props => (
              <>
                <Search inputRefs={this.searchInputRef} searchCountry={this.searchCountry} filterCountry={this.filterCountryByRegion} {...props} />
                {searchResult.length > 0 ? <button className='btn rounded' onClick={this.clearSearch}>Clear Search Result</button> : null}
                {dataToBeRender.length > 0 ? <Countries allCountries={dataToBeRender} /> : <ReactLoading type='spin' color='#202c37' width='45px' className='loading' />}
              </>
            )} />
            <Redirect to='/404notfound' />
          </Switch>
        </MainContainer>
      </>
    );
  }
}

export default App;