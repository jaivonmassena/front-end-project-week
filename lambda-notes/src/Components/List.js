import React from 'react';
import NoteCard from './NoteCard'

 const List =(props) =>{return (<div className="Notes">
                <h2>Your Notes:</h2>
                  <div className="NC">
                    <NoteCard {...props}/>
                  </div>
                  {// React doesn't like for loops in render
                  //  https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778
                }
                </div>);}

export default List;
