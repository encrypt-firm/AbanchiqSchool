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
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from './../../features/auth/authSlice'
import Spinner from './../../components/Spinner/Spinner'

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
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {

        setFormData((prevState) => ({
            prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
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