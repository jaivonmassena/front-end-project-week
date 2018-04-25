import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import List from './Components/List';
import EditView from './Components/Edit';
import Sidebar from './Components/Sidebar';
import NoteView from './Components/Noteview';
import NewView  from './Components/NewNote';






class App extends Component {
  constructor() {
    super();
    this.state = {
        title: 'Test Title',
        body: 'Body Content testing'
    };
  }
  render() {
    return (
      <div className="App">
      <Sidebar />
      <Route exact path ='/' render={() => <List {...this.state}/>} />
      <Route path ='/edit' component={EditView} />
      <Route path ='/NewNote' component={NewView}/>
      <Route path = '/Note' component={NoteView} />
      </div>
    );
  }
}

export default App;
