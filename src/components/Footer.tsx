import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup } from 'react-icons/hi'
import { BiHome, BiMailSend, BiUser } from 'react-icons/bi'



const Footer = () => {
    return (
        <div className='footer'>
            This is the footer
            <ul className='footer__mobileNav'>
                <Link to='/'>
                    <BiHome />
                    <p>Home</p>
                </Link>
                <Link to='/'>
                    <HiOutlineCollection />
                    <p>Courses</p>
                </Link>
                <Link to='/'>
                    <BiMailSend />
                    <p>Contact Us</p>
                </Link>
                <Link to='/'>
                    <HiOutlineUserGroup />
                   <p> About Us</p>
                </Link>
                <Link to='/'>
                    <HiOutlineUserGroup />
                    <p>Profile</p>
                </Link>
            </ul>
        </div>
    )
}

export default Footer