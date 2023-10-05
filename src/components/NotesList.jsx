import React from 'react'
import Note from './Note.jsx'
import '../css/note.css'
import AddNote from './AddNote.jsx'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <>
    <div className="notelist"> 
    <AddNote handleAddNote={handleAddNote}/>
       {notes.map((note,key)=>(<Note id={key} content={note.content} date ={note.date} handleDeleteNote={handleDeleteNote} key={key}/>))} 
    </div> 
    </>
  )
}

export default NotesList;