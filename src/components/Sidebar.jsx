import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { PiArchiveBoxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useTheme from '../contexts/ThemeContext';

function Sidebar() {
  const { sideBar } = useTheme()
  return (
    // for collasping use width w-12
    <div className={`col-span-1 text-white mr-4 duration-300 ${sideBar ? 'w-44' : 'w-12'}`}>
      <div className='flex items-center bg-yellow-900 rounded-r-full'>
        <i className='text-2xl m-2 ml-4 '><MdLightbulbOutline /></i>
        <span className={`duration-300 ${sideBar ? '' : 'scale-0'}`}> Notes </span>
      </div>
      <div className='flex items-center'>
        <i className='text-2xl m-2 ml-4 '><FaRegBell />
        </i>
        <span className={`duration-300 ${sideBar ? '' : 'scale-0'}`}> Reminder </span>
      </div>
      <div className='flex items-center'>
        <i className='text-2xl m-2 ml-4 '><PiArchiveBoxLight /></i>
        <span className={`duration-300 ${sideBar ? '' : 'scale-0'}`}> Archive </span>
      </div>
      <div className='flex items-center'>
        <i className='text-2xl m-2 ml-4 '><RiDeleteBin6Line />
        </i>
        <span className={`duration-300 ${sideBar ? '' : 'scale-0'}`}> Bin </span>
      </div>
    </div>
  )
}

export default Sidebar