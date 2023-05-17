import React,{useState} from 'react'
import axios from "axios" 
import "./register.css"
import {useNavigate} from "react-router-dom"
 // to call api

const Register=()=>{
    const history=useNavigate()
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    });

    const handleChange= e =>{
        
        const {name,value}=e.target
        setUser({
            ...user, //spead operator
            [name]:value
        })

    }

    const register=()=>{
        const{name,email,password,reEnterPassword}=user
        if(name && email && password && (password===reEnterPassword))
         {  //alert("posted")

              axios.post("http://localhost:9002/register",user)
              .then(res=>{alert(res.data.message)
            history("/login");
            })
        }
        else {alert("invalid input")}
        
    }
    return(
        <div className='register'>
        {console.log("User",user)}
        <h1>register</h1>
        <input type="text" name="name" value={user.name} placeholder='your name'  onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder='your email' onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder='your password' onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder=' re-enter your password' onChange={handleChange}></input>
        <div className="button" onClick={register}>register</div>
        <div>or</div>
        <div className="button" onClick={()=>history("/login")}>login</div>
        </div>
    )
}
export default Register;
