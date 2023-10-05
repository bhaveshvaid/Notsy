import React from 'react'
import '../css/note.css'
import { useState } from 'react'
import {MdDarkMode,MdOutlineDarkMode} from 'react-icons/md'

const HeadComp = ({handleToggler}) => {
  const [lightmode, setLightmode]= useState(true)
  // let lightmode = true;
  const handleTogglerClick=()=>{
    if(lightmode===true){
      setLightmode(false)
      handleToggler(true);
    }
    else{
      setLightmode(true)
      handleToggler(false);
    }
  }
  return (
    <div className='header'>
        <h1><span><img src="R.png" height={'70em'} alt="notsy-logo" /></span>Notsy</h1>
        <button className='toggler' onClick={handleTogglerClick}><MdDarkMode className= {`${lightmode===false&& 'd-none'}`} size='1.3em'/>
        <MdOutlineDarkMode className= {`${lightmode===true&& 'd-none'}`} size='1.3em'/></button>
    </div>
  )
}

export default HeadComp;