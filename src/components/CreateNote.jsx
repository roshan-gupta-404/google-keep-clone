import React, { useEffect, useRef, useState } from 'react'
import { useKeep } from '../contexts/KeepContext'
import { IoMdAdd } from "react-icons/io";

function CreateNote() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const { addNote } = useKeep();
  const inputDiv = useRef(null);
  // const [titleFocus, setTitleFocus] = useState(false)
  // const [descFocus, setDescFocus] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  // let showDesc = false;
  // console.log('title ' + titleFocus);
  // console.log('desc ' + descFocus);
  // console.log('showDesc ' + showDesc);
  // if((titleFocus || descFocus) && !showDesc) {setShowDesc(true)}
  // if((!titleFocus || !descFocus) && !showDesc) {setShowDesc(true)}

  const insertNote= ()=>{
    if (title.trim() || desc.trim()) {
      addNote({ title, desc })
      setTitle('')
      setDesc('')
    }
    else{return}
  }
  const handleAddBtn = (e) => {
    e.preventDefault();
    insertNote()
  }

  const handleClickOutside = (e)=>{
    if(inputDiv.current && !inputDiv.current.contains(e.target)){
      console.log('inside clickeoutside');
      insertNote()
      setShowDesc(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('click',handleClickOutside,false)
    return ()=>{
      document.removeEventListener('click',handleClickOutside,false) 
    }
  },[title, desc])

  return (
    <div className='sm:mb-8 sm:p-8 mb-2 p-2 flex justify-center '>
      <div className='w-52 sm:w-96 border border-gray-500 p-2 rounded-xl hover:border-gray-300 focus-within:border-gray-300 '
          ref={inputDiv}
      >
        {/* title */}
        {showDesc && <input
          className='bg-transparent focus:outline-none text-white w-full mb-2 px-1'
          name='title'
          type='text'
          value={title}
          placeholder='Title'
          onChange={(e) => { setTitle(e.target.value) }}
        // onFocus={() => { setTitleFocus(true)}}
        // onBlur={()=>{setTitleFocus(false)}}
        />}
        {/* description */}
        <textarea
          name='textarea'
          className='bg-transparent focus:outline-none text-white w-full px-1'
          type='text'
          value={desc}
          placeholder='Take a note...'
          onChange={(e) => { setDesc(e.target.value) }}
          onFocus={() => {setShowDesc(true)}}
        // onBlur={()=>{setDescFocus(false)}}
        />
        {showDesc && <div className='flex justify-end'>
          <button
            className='text-white text-2xl font-extrabold hover:bg-zinc-900 rounded-full p-1 mt-2'
            onClick={handleAddBtn}
          ><IoMdAdd /></button>
        </div>}
      </div>
    </div>
  )
}

export default CreateNote