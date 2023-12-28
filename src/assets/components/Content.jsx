import React from 'react'
import CreateNote from './CreateNote'
import Note from './Notes'

function Content() {
  return (
    <div className='m-8 py-4 basis-2/3'> 
    <CreateNote/>
    <Note/>
    </div>
  )
}

export default Content