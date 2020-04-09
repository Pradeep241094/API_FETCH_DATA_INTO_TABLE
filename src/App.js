import React, { Component } from 'react';
import DataTable from './Components/DataTable.js';
import './App.css';

class App extends Component {
  state = {
    NasaResponse: [], // response data fetched from the API
  }

  componentDidMount() {
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')  //Fetch method to obtain data from the API                                            
    .then(res => res.json()) //the data in terms as JSON objects
    .then((data) => {
      this.setState({ NasaResponse: data }) // assigning the data to the variable
     // console.log(this.state.NasaResponse)
    })
    .catch(console.log)
  }
  render() {
    return ( // data passed to the DataTable Component
     <div>
      <h1>NASA Data Resource</h1>
      <DataTable alItemRows={this.state.NasaResponse} />
     </div>
    );
  }
}
export default App;
