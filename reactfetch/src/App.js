import React, { Component } from 'react';
import './App.css';


const API = '';
const DEFAULT_QUERY = 'redux';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
    };
        //test
  }

  componentDidMount() {
    fetch(API +DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ data: data.data}));
  }
  
  render() {
    return (
      //component
      <div className="App">
          
      </div>
    );
  }
}


export default App;