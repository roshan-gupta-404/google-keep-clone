import React from 'react'
import Note from './Note'
import { useKeep } from '../contexts/KeepContext'

function Notes() {
  const {notes} = useKeep()
  return (
    <div className='sm:mb-8 sm:p-8 mb-2 p-2 text-white flex flex-col items-center md:flex-row md:flex-wrap md:justify-center lg:justify-normal md:items-start '>
      {notes.map((note)=>(
        <Note
          key={note.id}
          note={note}
        />
      ))}
    </div>
  )
}

export default Notes