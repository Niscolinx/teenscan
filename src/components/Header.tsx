import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <img src={Logo} alt="logo" style={{marginRight: '2rem'}}/>
            <Link to='/'>Categories</Link>

            <div className="header_input-box">
            <BiSearch className='header_input-box_searchIcon'/>
            <input className='header_input-box_input' placeholder='Search courses'/>
            </div>

            <Link to='/'>Courses</Link>
            <Link to='/'>Teach on Teenscanblog</Link>

            <ul className='header_list'>
                <li className="header_list-item"><Link to='/'>Login</Link></li>
                <li className="header_list-item"><Link to='/'>Signup</Link></li>
            </ul>
        </>
    )
}

export default Header