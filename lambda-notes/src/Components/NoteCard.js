import React from 'react';

const NoteCard=(props) =>{
  return(<div className="Card">
  <div className= "InnerCard">
  <h3>{props.title}</h3> <p>{props.body}
  </p>
  </div>
  </div>)
}

export default NoteCard;
