import React from 'react'
import '../css/note.css'
import {MdSearch} from 'react-icons/md'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <MdSearch className='search-icon' size='1.3em'/>
        <input type='text' onChange={(e)=>handleSearchNote(e.target.value)} placeholder='type to search...'/>
        </div>
  )
}

export default Search