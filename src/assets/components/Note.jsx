import React from 'react'

function Note() {
  return (
    <div className='w-80 md:w-72 border border-gray-500 p-2 rounded-xl mx-2 mb-2'>
        <h2 className='font-semibold mb-4 text-xl '>Title:</h2>
        <span>This is description of note.</span>
    </div>
  )
}

export default Note