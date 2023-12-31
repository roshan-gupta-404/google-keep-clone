import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { SiGooglekeep } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoMdRefresh } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdApps } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import useTheme from '../contexts/ThemeContext';

function Header() {
  const {sideBar,sideBarCollaspe, sideBarExpand} = useTheme()

  const toggleSidebar = ()=>{
    if(sideBar){
      // if sidebar is in expanded state
      sideBarCollaspe()
    }
    else{
      // if sidebar is in collapsed state
      sideBarExpand()
    }
  }
  
  return (
    <>
    <div className='flex justify-between items-center m-1 p-2'>
    <div id='left' className='flex'>
        <div className='text-white text-2xl flex items-center hover:bg-zinc-900 rounded-full p-2 cursor-pointer' onClick={toggleSidebar} ><RxHamburgerMenu /></div>
        <div className='text-yellow-200 text-2xl mx-2 flex items-center'><SiGooglekeep /></div>
        <div className='text-white text-2xl mx-2 flex items-center'>Keep</div>
    </div>
    <div id='centre' className='hidden sm:flex'>
        <form className='bg-gray-600 flex  p-2 rounded-2xl w-full focus-within:bg-gray-400'>
            <button className='rounded-l-md mx-4' disabled><IoSearch /></button>
            <input className='text-white bg-gray-600 w-54 md:w-80 focus:outline-none focus:bg-gray-400 focus:text-black ' disabled type='text' placeholder='Search'/>
        </form>
    </div>
    <div id='right' className='flex'>
        <div className='text-white text-2xl mx-2 flex items-center sm:hidden hover:bg-zinc-900 rounded-full p-2 cursor-pointer'><IoSearch /></div>
        <div className='text-white text-2xl mx-2 flex items-center hover:bg-zinc-900 rounded-full p-2 cursor-pointer'><IoMdRefresh /></div>
        <div className='text-white text-1xl mx-2 flex items-center hover:bg-zinc-900 rounded-full p-2 px-3 cursor-pointer'><TfiViewList /></div>
        <div className='text-white text-2xl ml-2 flex items-center mr-8 hover:bg-zinc-900 rounded-full p-2 cursor-pointer'><IoSettingsOutline /></div>
        <div className='text-white text-2xl mx-2 flex items-center hover:bg-zinc-900 rounded-full p-2 cursor-pointer'><MdApps /></div>
        <div className='text-white text-2xl mx-2 flex items-center hover:bg-zinc-900 rounded-full p-2 cursor-pointer'><CgProfile /></div>
    </div>
    </div>
    </>
  )
}

export default Header