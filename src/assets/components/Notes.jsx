import React from 'react'
import Note from './Note'

function Notes() {
  return (
    <div className='sm:mb-8 sm:p-8 mb-2 p-2 text-white md:flex md:flex-wrap sm'>
      <Note/>
      <Note/>
      <Note/>
    </div>
  )
}

export default Notes