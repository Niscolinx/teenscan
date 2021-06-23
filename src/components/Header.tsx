import React from 'react'
import Logo from '../assets/Logo.png'
// import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {

    const handleSearch = () => {
        
    }
    return (
        <>
            <Link to='/'>
                <img src={Logo} alt='logo' className='header__logo' />
            </Link>

            <Link to='/courses' className='header__homenav'>
                Courses
            </Link>

            <div className='header__input-box'>
                {/* <BiSearch className='header__input-box--searchIcon' />
                <form onSubmit={handleSearch}>
                    <input
                        className='header__input-box--input'
                        placeholder='What do you want to learn'
                    />
                </form> */}
            </div>

            <ul className='header__list'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About Us</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/courses' className='header__list--auth'>
                        Start Learning
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header
