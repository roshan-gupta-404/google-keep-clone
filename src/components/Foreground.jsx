import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import { ThemeProvider } from '../contexts/ThemeContext'

function Foreground() {
  const [sideBar , setSideBar] = useState(false)

  const sideBarCollaspe = ()=>{
    setSideBar(false)
  }
  const sideBarExpand = ()=>{
    setSideBar(true)
  }

  return (
    <div className='fixed w-full h-screen top-0 left-0 z-[2]'>
      <ThemeProvider value={{sideBar, sideBarCollaspe, sideBarExpand}}>
        <Header />
        <div className='bg-gray-500 w-full h-[1px] mb-2'></div>
        <Main />
      </ThemeProvider>
    </div>
  )
}

export default Foreground