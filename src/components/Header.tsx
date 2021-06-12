import React from 'react'
import Logo from '../assets/Logo.png'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

// interface ModalHandler {
//     displayModal: boolean
//     toDisplay: string
// }

const Header = () => {
    // const [handleMouse, setHandleMouse] = useState('none')
    // const [handleModal, setHandleModal] = useState(false)
    // const [handleSpacer, setHandelSpacer] = useState(false)

    // const [modalHandler, setModalHandler] = useState<ModalHandler>({
    //     displayModal: false,
    //     toDisplay: 'none',
    // })

    // let { displayModal, toDisplay } = modalHandler

    // let categoryModalStyle = {
    //     display: toDisplay,
    // }

    // const handleSpacerLeave = () => {
    //     if (displayModal) {
    //         setModalHandler({
    //             ...modalHandler,
    //             toDisplay: 'none',
    //         })
    //     }
    // }

    // const handleMouseLeave = () => {
    //     setModalHandler({
    //         ...modalHandler,
    //         toDisplay: 'none',
    //     })
    // }
    // const handleMouseEnter = () => {
    //     setModalHandler({
    //         ...modalHandler,
    //         toDisplay: 'block',
    //     })
    // }
    // const handleModalOpen = () => {
    //     setModalHandler({
    //         ...modalHandler,
    //         displayModal: true,
    //     })
    // }

    // const handleModalClose = () => {
    //     setModalHandler({
    //         ...modalHandler,
    //         toDisplay: 'none',
    //         displayModal: false,
    //     })
    // }
    // const categoryModal = (
    //     <div
    //         className='category'
    //         style={categoryModalStyle}
    //         onMouseEnter={handleModalOpen}
    //     >
    //         <ul className='categoryModal' onMouseLeave={handleModalClose}>
    //             <li>
    //                 <Link to='/'>Digital Marketing</Link>
    //             </li>
    //             <li>
    //                 <Link to='/'>Blogging</Link>
    //             </li>
    //             <li>
    //                 <Link to='/'>Web Development</Link>
    //             </li>
    //             <li>
    //                 <Link to='/'>Graphics Design</Link>
    //             </li>
    //             <li>
    //                 <Link to='/yello'>Public Speaking</Link>
    //             </li>
    //         </ul>
    //     </div>
    // )

    return (
        <>
            <img src={Logo} alt='logo' className='header__logo' />

            {/* <div className='modal' onMouseLeave={handleMouseLeave}>
                <Link to='/' onMouseOver={handleMouseEnter}>
                    Categories
                </Link>
                <p
                    className='modal_spacer'
                    onMouseLeave={handleSpacerLeave}
                ></p>
                {categoryModal}
            </div> */}

            <Link to='/' className='header__homenav'>
                Courses
            </Link>

            <div className='header__input-box'>
                <BiSearch className='header__input-box--searchIcon' />
                <input
                    className='header__input-box--input'
                    placeholder='What do you want to learn'
                />
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
