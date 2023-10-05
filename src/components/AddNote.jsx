import React from 'react'
import '../css/note.css'
import { useState } from 'react';

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText]= useState('');
    const characterLimit = 200;

    const handleChange=(e)=>{
      if(characterLimit - e.target.value.length >=0){
        setNoteText(e.target.value);
      }    
    }

    const handleSave=()=>{
         if(noteText.trim().length===0){
            alert('Please enter valid text in notes');
            setNoteText('');
         }
         else{
            handleAddNote(noteText);
            setNoteText('');
         }
    }
  return (
    <div className='note new'>AddNote
    <textarea onChange={handleChange} value={noteText} placeholder='Type to add a note...' cols="10" rows="10"></textarea>
    <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className='save' onClick={handleSave}>save</button>
    </div>
    </div>
  )
}

export default AddNote;