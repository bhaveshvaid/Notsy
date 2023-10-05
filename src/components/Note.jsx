import React from 'react'
import '../css/note.css'
import {MdDeleteForever} from 'react-icons/md'

const Note = (content) => {
    const handleDeleteNote=()=>{
        content.handleDeleteNote(content.id)
    }
  return (
    <>
     <div className="note">
     <p className='content'>{content.content}</p>
     <div className="note-footer">
        <span>{content.date}</span>
        <MdDeleteForever className='delete-icon' size='1.3em' onClick={handleDeleteNote}/>
     </div>
     </div>
    </>
  )
}

export default Note;