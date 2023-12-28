import React from 'react'
import Header from './Header'
import Main from './Main'

function Foreground() {
  return (
    <div className='fixed w-full h-screen top-0 left-0 z-[2]'>
        <Header/>
        <div className='bg-gray-500 w-full h-[1px] mb-2'></div>
        <Main/>
    </div>
  )
}

export default Foreground