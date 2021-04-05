import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'

let categoryModalStyle = {
    display: `block`
}

const categoryModal = (
    <div className='category' style={categoryModalStyle}>
        <ul className='categoryModal'>
            <li>Hello</li>
            <li>World</li>
            <li>How</li>
        </ul>
    </div>
)

const handleModalToggle = () => {
    console.log('mouse entered!')
   let transFormed = {...categoryModal, display: 'block'}
   console.log(transFormed)
   categoryModalStyle = transFormed
   
}

const Header = () => {
    console.log(categoryModalStyle)
    return (
        <>
            <img src={Logo} alt="logo" style={{marginRight: '2rem'}}/>
            
            <div className="modal">
            <Link to='/' onMouseOver={handleModalToggle}>Categories</Link>
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