import React from 'react'
import "./homepage.css"

const Homepage=({setLoginUser})=>{
    return(
        <div className='homepage'>
        <h1>hello homepage</h1>
        <div className='button' onClick={()=>setLoginUser({})}>logout</div>
        </div>
    )
}
export default Homepage;
