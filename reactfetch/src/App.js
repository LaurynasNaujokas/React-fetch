import React, { Component } from 'react';
import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=';
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
    fetch(API + DEFAULT_QUERY)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits}));
  }
  
  render() {
    const { hits } = this.state;
  
    return (
      <ul>
        <h1>List of news</h1>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}
             <strong>Author: {hit.author}</strong>
            <p key={hit.objectID}>Created: {hit.created_at}</p>
            </a>
          </li>  
        )}
      </ul>
    );
  }
}

export default App;