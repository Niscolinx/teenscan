import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup } from 'react-icons/hi'
import { BiHome, BiMailSend } from 'react-icons/bi'



const Footer = () => {
    return (
        <div className='footer'>
            This is the footer
            <ul className='footer__mobileNav'>
                <Link to='/'>
                    <HiOutlineCollection />
                </Link>
                <Link to='/'>
                    <BiHome />
                </Link>
                <Link to='/'>
                    <BiMailSend />
                </Link>
                <Link to='/'>
                    <HiOutlineUserGroup />
                </Link>
            </ul>
        </div>
    )
}

export default Footer