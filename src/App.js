import React from 'react';
import 'react-instantsearch-theme-algolia/style.css';
import {
  InstantSearch,
  SearchBox,
  Hits
} from 'react-instantsearch/dom';

class App extends React.Component {
  componentDidMount() {
    navigator.serviceWorker.register('http://localhost:3000/sw.js').then(function(reg) {
      console.log('Yey!', reg);
    }).catch(function(err) {
      console.log('Boo!', err);
    });
  }

  render() {
    return (
      <InstantSearch
        className="container-fluid"
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="ikea"
      >
        <SearchBox />
        <Hits hitComponent={Hit}/>
      </InstantSearch>
    );
  }
}

function Hit({hit}) {
  return (
    <div style={{width: "100%", verticalAlign: 'middle', margin: '10px 0'}}>
      <img style={{width: 80, verticalAlign: 'middle', marginRight: '20px'}} src={hit.image} />
      <span>
        <span>{hit.name}</span>
        <div>{hit.description}</div>
      </span>
    </div>
  );
}

export default App;