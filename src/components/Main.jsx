import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

function Main() {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <Content />
            </div>
        </>
    )
}

export default Main