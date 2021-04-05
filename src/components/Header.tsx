import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'




const Header = () => {
    const [state, setState] = useState('none')
    const [mouseMove, setMouseMove] = useState(false)

    let categoryModalStyle = {
        display: state
    }
    
    
    const handleMouseLeave = () => {
       // setState('none')
    }
    const handleMouseEnter = () => {
        console.log('mouse entered!')
        setState('block')
    }

    const handleModalEnter = () => {
        console.log('modal entered')
        setMouseMove(true)
    }

    const handleModalLeave = () => {
        console.log('modal close')
        setMouseMove(false)
       // setState('none')
    }
    const categoryModal = (
        <div className='category' style={categoryModalStyle} onMouseEnter={handleModalEnter}>
            <ul className='categoryModal' onMouseLeave={handleModalLeave}>
                 <li><Link to='/'  className="header_list-item--1">Login</Link></li>
                <li><Link to='/'  className="header_list-item--2">Signup</Link></li>
                 <li><Link to='/'  className="header_list-item--1">Login</Link></li>
                <li><Link to='/'  className="header_list-item--2">Signup</Link></li>
                 <li><Link to='/'  className="header_list-item--1">Login</Link></li>
                <li><Link to='/'  className="header_list-item--2">Signup</Link></li>
                <li>Hello</li>
                <li>World</li>
                <li>How</li>
            </ul>
        </div>
    )


    console.log(categoryModalStyle)
    return (
        <>
            <img src={Logo} alt="logo" style={{marginRight: '2rem'}}/>
            
            <div className="modal" onMouseLeave={handleMouseLeave} style={{background: 'red'}}>
            <Link to='/' onMouseOver={handleMouseEnter}>Categories</Link>
            {categoryModal}
            </div>

            <div className="header_input-box">
            <BiSearch className='header_input-box_searchIcon'/>
            <input className='header_input-box_input' placeholder='Search courses'/>
            </div>

            <Link to='/'>Courses</Link>
            <Link to='/'>Teach on Teenscanblog</Link>

            <ul className='header_list'>
                <li><Link to='/'  className="header_list-item--1">Login</Link></li>
                <li><Link to='/'  className="header_list-item--2">Signup</Link></li>
            </ul>
        </>
    )
}

export default Header