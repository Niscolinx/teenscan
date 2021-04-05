import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'




const Header = () => {
    const [handleMouse, setHandleMouse] = useState('none')
    const [handleModal, setHandelModal] = useState(false)

    let categoryModalStyle = {
        display: handleMouse
    }
    
    
    const handleMouseLeave = () => {
        if(!handleModal){
            
            setHandleMouse('none')
       }
    }
    const handleMouseEnter = () => {
        setHandleMouse('block')
    }

    const handleModalOpen = () => {
        setHandelModal(true)
    }

    const handleModalClose = () => {
        setHandelModal(false)
       setHandleMouse('none')
    }
    const categoryModal = (
        <div className='category' style={categoryModalStyle} onMouseEnter={handleModalOpen}>
            <ul className='categoryModal' onMouseLeave={handleModalClose}>
                 <li><Link to='/'>Login</Link></li>
                <li><Link to='/'>Signup</Link></li>
                 <li><Link to='/'  >Login</Link></li>
                <li><Link to='/' >Signup</Link></li>
                 <li><Link to='/'  >Login</Link></li>
                <li><Link to='/yello' >Signup</Link></li>
                
            </ul>
        </div>
    )


    console.log(categoryModalStyle)
    return (
        <>
            <img src={Logo} alt="logo" style={{marginRight: '2rem'}}/>
            
            <div className="modal" onMouseLeave={handleMouseLeave}>
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