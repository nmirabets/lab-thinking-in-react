import React, { Component } from 'react';
import jsondata from './data.json';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: jsondata.data,
      filteredData: jsondata.data,
    };
  }

  handleOnChange = (e) => {
    const { data } = this.state;
    const filteredData = data.filter(item => {
      return item.name.includes(e.target.value)
    })
    this.setState({
      filteredData: filteredData,
    })
  }

	render() {

    const { filteredData } = this.state;

    return (
      <div className="App">
        <SearchBar onChange={this.handleOnChange} />
        <FilterableProductTable products={ filteredData } />
      </div>
    )
	}
}

export default App;
