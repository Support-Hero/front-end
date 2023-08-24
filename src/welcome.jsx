
import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Body from './body/Body'
import Bottom from './Bottom/Bottom'
const Welcome = ()=>{
    return (
        <>
        <Navbar />
        <div className='d-flex'>
        <Sidebar />
        <Body />
        </div>
        <Bottom />
        </>)
}
export default Welcome