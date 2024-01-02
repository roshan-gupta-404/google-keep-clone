import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useKeep } from '../contexts/KeepContext';

function Note({ note }) {
  const {deleteNote} = useKeep()
  const handleDelBtn = (e)=>{
    e.preventDefault();
    deleteNote(note.id)
  }
  return (
    <div className='w-56 md:w-72 border border-gray-500 p-2 rounded-xl mx-2 mb-2 hover:border-gray-300'>
      <h2 className='font-semibold mb-4 text-xl '>{note.note.title}</h2>
      <span className='inline-block w-56'>{note.note.desc}</span>
      <div className='flex justify-end'>
        <button
          className='text-white hover:bg-zinc-900 rounded-full p-2'
          onClick={handleDelBtn}
        ><RiDeleteBin6Line />
        </button>
      </div>
    </div>
  )
}

export default Note