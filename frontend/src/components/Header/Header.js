import React from 'react'
import Tarajia from './../../assets/tarajia3.png'
import { RiSearch2Fill } from 'react-icons/ri'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom"
import './header.css'

function Header() {
    const searchStyle = {
        color: "black",
        fontSize: "25px"
    }
    const cart = {
        color: "black",
        fontSize: "25px"
    }
    const user = {
        color: "black",
        fontSize: "30px",
        backgroundColor: "#f5deb3",
        borderRadius: "50px",
        padding: ".4rem",
    }
    return (
        <header className='H-Navigation'>
            <div className="menu">
                <Link to='/'>
                    <div className="Logo">
                        <img src={Tarajia} alt="Tarajia" />
                    </div>
                </Link>
            </div>
            <div className="search-bar">
                <div className="box">
                    <input type="text" placeholder='Search...' />
                    <button><RiSearch2Fill style={searchStyle} /></button>
                </div>
            </div>
            <nav className="headerNav">
                <ul className='headerNav-ul'>
                    <li className="cartButton">
                        <HiOutlineShoppingBag style={cart} className='cart-icon' />
                        <div className="cart"><span>4</span></div>
                    </li>
                    <li>

                        <Link to='/login' className='linkTo'><FaUserAlt style={user} /><span>LogIn</span></Link>
                    </li>
                    <li>
                        <Link to='/register' className='linkTo'><FaUser style={user} />SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header