import React,{useState} from 'react'
import "./login.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login=({setLoginUser})=>{
    const history=useNavigate() //creating instance
    const [user,setUser]=useState({
        
        email:"",
        password:""
        
    })

    const handleChange= e =>{
        
        const{name,value}=e.target
        setUser({
            ...user, //spead operator
            [name]:value
        })

    }
const login=()=>{
    axios.post("http://localhost:9002/login",user)
    .then(res=>{
        alert(res.data.message)
        setLoginUser(res.data.user)
         history("/");
    })
}


    return(
        <div className='login'>
       
        <h1>login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='enter your email'></input>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='enter your password'></input>
        <div className="button" onClick={login}>login</div>
        <div>or</div>
        <div className="button" onClick={()=>history("/register")}>Register</div>
        </div>
    )
}
export default Login;
