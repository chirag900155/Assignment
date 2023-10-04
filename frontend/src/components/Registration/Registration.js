import React, {useState} from "react";
import './Regitraion.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Registration = ()=>{

    const [user, setUser] = useState({
        name:"",
        email: "",
        password: "",
        reenterpassword: ""
    })

    const navigate = useNavigate()

    const handleChange = e=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const URL = "http://localhost:8000"

    const register = ()=>{
        const {name, email, password, reenterpassword} = user
        if(name && email && password && (password === reenterpassword)){
            axios.post(`${URL}/register`, user).
            then(res => { alert(res.data.message)})
        }else{
            alert("Please fill all the fileds or enter correct password")
        }
    }

    return (
        <div className="register">
            {console.log("user", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reenterpassword" value={user.reenterpassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={()=> navigate('/')}>Login</div>
        </div>
    )
}

export default Registration