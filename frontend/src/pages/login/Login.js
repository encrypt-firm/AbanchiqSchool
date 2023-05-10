import React from 'react'

import './login.css'
import { BsFillLockFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { GoHome } from 'react-icons/go'
import { TfiHelpAlt } from 'react-icons/tfi'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineWifiPassword } from 'react-icons/md'
import { AiOutlineWindows } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Login() {

    const icon = {
        color: "black",
        fontSize: "35px"
    }

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {

        setFormData((prevState) => ({
            prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div div className='loginSection' >
            <div className="cover-message">
                <div className="login-message">
                    <div className="message-wrapper">
                        <div className="message">Handbags</div>
                        <div className="message">Shoes</div>
                        <div className="message">Watches</div>
                        <div className="message">Oils</div>
                        <div className="message">Perfumes</div>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}>

                <div class="segment">
                    <h1>Log in</h1>
                    < AiOutlineWindows style={icon} />
                </div>
                <label>
                    <input type="email" placeholder="Enter Email Address" id='email' value={email} name='email' onChange={onChange} />
                    < HiOutlineMail />
                </label>
                <label>
                    <input type="password" placeholder="Enter Password" id='password' value={password} name='password' onChange={onChange} />
                    < MdOutlineWifiPassword />
                </label>
                <button class="red" type="submit"><BsFillLockFill /> Log in</button>

                <div class="segment">
                    <Link to='/'><button class="unit" type="button">< GoHome /></button></Link>
                    <button class="unit" type="button">< FcGoogle /></button>
                    <button class="unit" type="button">< TfiHelpAlt /></button>
                </div>


            </form>
        </div>
    )
}
export default Login