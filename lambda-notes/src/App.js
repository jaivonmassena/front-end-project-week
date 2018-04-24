import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import main from './Components/Main';

const Result =() =>{
  return(<div className="Sidebar">
          <h1>Lambda <br/> Notes</h1>

          <button>View Your Notes</button>
          <button> +Create New Notes</button>

  </div>);
}
const NoteCard=() =>{
  return(<div className="Card"> <div><h3>Note Title</h3> <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.

 </p> </div>  </div>)
}
const List =() =>{return (<div className="Notes">
                <h2>Your Notes:</h2>
                    <NoteCard />
</div>);}

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
