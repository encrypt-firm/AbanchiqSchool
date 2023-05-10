import React from 'react'
import './register.css'
import { BsFillLockFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { GoHome } from 'react-icons/go'
import { TfiHelpAlt } from 'react-icons/tfi'
import { FaUserAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineWifiPassword } from 'react-icons/md'
import { AiOutlineWindows } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const icon = {
        color: "black",
        fontSize: "35px"
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

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
        <div className='registerSection'>
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
                    <h1>Sign up</h1>
                    < AiOutlineWindows style={icon} />
                </div>

                <label>
                    <input type="text" placeholder="USERNAME" id='name' value={name} name='name' onChange={onChange} />
                    < FaUserAlt />
                </label>
                <label>
                    <input type="email" placeholder="Enter Email Address" id='email' value={email} name='email' onChange={onChange} />
                    < HiOutlineMail />
                </label>
                <label>
                    <input type="password" placeholder="Enter Password" id='password' value={password} name='password' onChange={onChange} />
                    < MdOutlineWifiPassword />
                </label>
                <label>
                    <input type="password" placeholder="Confirm your Password" id='password2' value={password2} name='password2' onChange={onChange} />
                    < MdOutlineWifiPassword />
                </label>
                <button class="red" type="submit"><BsFillLockFill /> Sign up</button>

                <div class="segment">
                    <Link to='/'><button class="unit" type="button">< GoHome /></button></Link>
                    <button class="unit" type="button">< FcGoogle /></button>
                    <button class="unit" type="button">< TfiHelpAlt /></button>
                </div>


            </form>
        </div>
    )
}

export default Register