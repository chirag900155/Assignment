import React, {useState} from "react";
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e=>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const navigate = useNavigate()

    const URL = "http://localhost:8000"

    const login = ()=>{
        axios.post(`${URL}/login`, user).
        then(res => {
            alert(res.data.message)
            if(res.data.user){
                navigate('/home')
            }
        })
    }

    return (
        <div className="login">
            {console.log("user", user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={ handleChange }></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}

export default Login