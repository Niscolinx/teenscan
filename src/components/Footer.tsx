import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup, HiMail } from 'react-icons/hi'
import { BiHome } from 'react-icons/bi'
import { GrContact } from 'react-icons/gr'


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
                    <GrContact />
                </Link>
                <Link to='/'>
                    <HiOutlineUserGroup />
                </Link>
            </ul>
        </div>
    )
}

export default Footer