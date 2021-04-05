import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            <div className="input-box">
            <BiSearch/>
            <input className='header_input'/>
            </div>
            <Link to='/'>Courses</Link>

            <ul className='header_list'>
                <li className="header_list-item">Login</li>
                <li className="header_list-item">Signup</li>
            </ul>
        </div>
    )
}

export default Header