import React, { useState } from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import { lists } from '../../landpage/welcome';

const Sidebar = () => {
    const [value, setValue]=useState(-1)
    return (
        <div  id='sidebar' style={{ width: "10%",marginTop:"10%"}}>
            {lists.map((list, index) => (
                <div
                    aria-label='sidebar_link'
                    className={`mt-3 border border-${list.bgcolor} bg-${list.bgcolor} bg-opacity-75`}
                    key={index}
                    onClick={(e)=>{e.preventDefault();setValue(index)}}
                    style={{transform:value===index?"translate(10%,0)":"",}}
                >
                    <div
                        className={`d-flex justify-content-start align-items-center `}
                    >
                        <i className={`bi ${list.imsrc} text-white fs-2`}></i>
                        <Link to={`/${list.title}`}> <label className="fs-5 text-white" style={{marginLeft:'10px'}}>{list.title}</label></Link>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default Sidebar