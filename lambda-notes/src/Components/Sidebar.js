import React from 'react';
import { Route, Link } from 'react-router-dom'

const Sidebar =() =>{
  return(<div className="Sidebar">
          <h1>Lambda <br/> Notes</h1>
          <Link to={'/'}><button>View Your Notes</button></Link>
          <Link to={'/NewNote'}><button> +Create New Notes</button></Link>
  </div>);
}

export default Sidebar;
