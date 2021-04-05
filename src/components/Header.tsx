import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

interface ModalHandler {
    displayModal: boolean
    handleSpacer: boolean
    toDisplay: string
}

const Header = () => {
    // const [handleMouse, setHandleMouse] = useState('none')
    // const [handleModal, setHandleModal] = useState(false)
    // const [handleSpacer, setHandelSpacer] = useState(false)

    const [modalHandler, setModalHandler] = useState<ModalHandler>({
        displayModal: false,
        handleSpacer: false,
        toDisplay: 'none',
    })

    let { displayModal, toDisplay, handleSpacer } = modalHandler

    let categoryModalStyle = {
        display: toDisplay,
    }
    const handleSpacerEnter = () => {
        setModalHandler({
            ...modalHandler,
            handleSpacer: true,
        })
    }

    const handleSpacerLeave = () => {
        setModalHandler({
            ...modalHandler,
            handleSpacer: false,
        })

        if (displayModal) {
            setModalHandler({
                ...modalHandler,
                toDisplay: 'none',
            })
        }
    }

    const handleMouseLeave = () => {
            setModalHandler({
                ...modalHandler,
                toDisplay: 'none',
            })
        
    }
    const handleMouseEnter = () => {
        setModalHandler({
            ...modalHandler,
            toDisplay: 'block',
        })
    }
    const handleModalOpen = () => {
        setModalHandler({
            ...modalHandler,
            displayModal: true,
        })
    }

    const handleModalClose = () => {
        setModalHandler({
            ...modalHandler,
            toDisplay: 'none',
            displayModal: false,
        })
    }
    const categoryModal = (
        <div
            className='category'
            style={categoryModalStyle}
            onMouseEnter={handleModalOpen}
        >
            <ul className='categoryModal' onMouseLeave={handleModalClose}>
                <li>
                    <Link to='/'>Signup</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/'>Signup</Link>
                </li>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/yello'>Signup</Link>
                </li>
            </ul>
        </div>
    )

    return (
        <>
            <img src={Logo} alt='logo' style={{ marginRight: '2rem' }} />

            <div className='modal' onMouseLeave={handleMouseLeave}>
                <Link to='/' onMouseOver={handleMouseEnter}>
                    Categories
                </Link>
                <p
                    className='modal_spacer'
                    onMouseEnter={handleSpacerEnter}
                    onMouseLeave={handleSpacerLeave}
                ></p>
                {categoryModal}
            </div>

            <div className='header_input-box'>
                <BiSearch className='header_input-box_searchIcon' />
                <input
                    className='header_input-box_input'
                    placeholder='Search courses'
                />
            </div>

            <Link to='/'>Courses</Link>
            <Link to='/'>Teach on Teenscanblog</Link>

            <ul className='header_list'>
                <li>
                    <Link to='/' className='header_list-item--1'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/' className='header_list-item--2'>
                        Signup
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Header
