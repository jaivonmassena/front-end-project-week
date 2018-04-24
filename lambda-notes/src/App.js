import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import main from './Components/Main';

const Result =() =>{
  return(<div className="Sidebar">
          <h1>Lambda Notes</h1>

          <button>1</button>
          <button>2</button>
    
  </div>);
}
const List =() =>{return (<div className="MainContent"></div>);}
class App extends Component {




  render() {
    return (
      <div className="App">
      <Result />
      <List />
      </div>
    );
  }
}

export default App;
