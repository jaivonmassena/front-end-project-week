import React from 'react';


const NewView =() =>{
   return( <div className ="Notes">
          <h2>Create New Note:</h2>
          <form action ='#'>
          <input type='text' name='NoteTitle' placeholder ='Note Title'/>
          <textarea id="content" name="content" placeholder="Write something.." ></textarea>
          <button> Save </button>
          </form>
    </div>
    )
}

export default NewView;
