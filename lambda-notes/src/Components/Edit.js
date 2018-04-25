import React from 'react';

const EditView =() =>{
   return( <div className ="Notes">
          <h2> Edit Note:</h2>
          <form action ='#'>
          <input type='text' name='NoteTitle' placeholder ='Note Title'/>
          <textarea id="content" name="content" placeholder="Write something.." ></textarea>
          <button> Update </button>
          </form>
    </div>
    )
}

export default EditView;
