import React, { Component } from 'react';
import './App.css';


const API = '';
const DEFAULT_QUERY = 'redux';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      hits: [],
    };
        //test
  }

  componentDidMount() {
    fetch(API +DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ data: data.hits}));
  }
  
  render() {
    const { hits } = this.state;
  
    return (
      //map through data
      <ul>
        
      </ul>
    );
  }
}


export default App;