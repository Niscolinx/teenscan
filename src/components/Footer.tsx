import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup } from 'react-icons/hi'
import { BiHome, BiMailSend, BiUser } from 'react-icons/bi'
import { SiMailDotRu } from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__main'>
                <div className='footer__item'>
                    <h3>TeensCanBlog</h3>
                    <ul>
                        <li>Caroline Odu ,Ejigbo Lagos Nigeria.</li>
                        <li> <span><AiFillPhone/></span> 09066287396</li>
                        <li> <span><SiMailDotRu/></span> suppor@teenscanblog.com</li>
                    </ul>
                </div>
            </div>

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
                    <BiUser />
                    <p>Profile</p>
                </Link>
            </ul>
        </div>
    )
}

export default Footer
