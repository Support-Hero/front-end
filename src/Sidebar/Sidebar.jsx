import React from 'react'
const Sidebar = ()=>{
    return (
        <div className='bg-secondary ' style={{width:"15%",height:"100vh"}}>
            <ul className='list-group'>
                <li className='btn btn-secondary ' style={{borderRadius:"0"}}>
                    Clients
                </li>
                <li className='btn btn-secondary ' style={{borderRadius:"0"}}>

                    Workers
                </li>
                <li className='btn btn-secondary ' style={{borderRadius:"0"}}>

                    Rosters
                </li>
                <li className='btn btn-secondary ' style={{borderRadius:"0"}}>

                    Teams
                </li>
            </ul>
        </div>
        )
}
export default Sidebar