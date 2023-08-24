
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../body/Body'
import Bottom from '../Bottom/Bottom'
const Welcome = ()=>{
    return (
        <div style={{height:"100vh"}}>
        <Navbar />
        <div className='d-flex'>
        <Sidebar />
        <Body />
        </div>
        <Bottom />
        </div>)
}
export default Welcome