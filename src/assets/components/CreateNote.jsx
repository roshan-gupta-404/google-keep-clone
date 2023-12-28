import React from 'react'

function CreateNote() {
  return (
    <div className='sm:mb-8 sm:p-8 mb-2 p-2 flex justify-center '>
        <div className='w-80 sm:w-96 border border-gray-500 p-2 rounded-xl '>
            <input className='bg-zinc-800 focus:outline-none text-white ' type='text' placeholder='Take a note...'/>
        </div>
    </div>
  )
}

export default CreateNote