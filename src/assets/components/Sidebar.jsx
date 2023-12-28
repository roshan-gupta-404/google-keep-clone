import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { PiArchiveBoxLight } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Sidebar() {
  return (
    // for collasping use width w-12
    <div className='text-white mx-4 w-44'>
    <div className='flex items-center bg-yellow-900 rounded-r-full'>
        <i className='text-2xl m-2 '><MdLightbulbOutline /></i>
        <span> Notes </span>
    </div>
    <div className='flex items-center'>
        <i className='text-2xl m-2 '><FaRegBell />
</i>
        <span> Reminder </span>
    </div>
    <div className='flex items-center'>
        <i className='text-2xl m-2 '><PiArchiveBoxLight /></i>
        <span> Archive </span>
    </div>
    <div className='flex items-center'>
        <i className='text-2xl m-2 '><RiDeleteBin6Line />
</i>
        <span> Bin </span>
    </div>
    </div>
  )
}

export default Sidebar