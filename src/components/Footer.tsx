import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup } from 'react-icons/hi'
import { BiHome, BiMailSend } from 'react-icons/bi'
import { SiMailDotRu } from 'react-icons/si'
import { FaMapMarkedAlt } from 'react-icons/fa'
import {
    AiFillPhone,
    AiFillFacebook,
    AiFillInstagram,
    // AiFillTwitterSquare,
    AiFillLinkedin,
} from 'react-icons/ai'

const Footer = () => {
    const date = new Date()

    const yearDisplay: number = date.getFullYear()

    return (
        <div className='footer'>
            <div className='footer__main'>
                <div className='footer__item footer__item--first'>
                    <h3>TeensCanBlog</h3>
                    <ul>
                        <li>
                            <FaMapMarkedAlt />
                            Caroline Odu ,Ejigbo Lagos Nigeria.
                        </li>
                        <li>
                            <AiFillPhone />
                            +2348123669728
                        </li>
                        <li>
                            <SiMailDotRu />
                            support@teenscanblog.com
                        </li>
                    </ul>
                </div>

                <div className='footer__item'>
                    <h3>Services</h3>
                    <ul>
                        <li>School Partnership </li>
                        <li>Community Outreach</li>
                        <li>IT Solutions</li>
                    </ul>
                </div>
                <div className='footer__item'>
                    <h3>Navigate</h3>
                    <ul>
                        <Link to='/courses'>Courses</Link>
                    </ul>
                </div>
                <div className='footer__item'>
                    <h3>Useful Links</h3>
                    <ul>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact Us</Link>
                    </ul>
                </div>
            </div>

            <div className='footer__social'>
                <p>&copy;Copyright {yearDisplay} &mdash; TeensCanBlog</p>

                <div className='footer__social--items'>
                    <p>
                        <span>Follow Us |</span>
                        <a
                            href='http://www.facebook.com/teenscanblog'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillFacebook />
                        </a>
                        <a
                            href='https://instagram.com/teenscan_blog?utm_medium=copy_link'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiFillInstagram />
                        </a>
                        {/* <a href='/'>
                            <AiFillTwitterSquare />
                        </a> */}
                        <a
                            href='https://www.linkedin.com/company/53484455'
                            target='_blank'
                             rel="noreferrer"
                        >
                            <AiFillLinkedin />
                        </a>
                    </p>
                </div>
            </div>

            <ul className='footer__mobileNav'>
                <Link to='/'>
                    <BiHome />
                    <p>Home</p>
                </Link>
                <Link to='/courses'>
                    <HiOutlineCollection />
                    <p>Courses</p>
                </Link>
                <Link to='/contact'>
                    <BiMailSend />
                    <p>Contact Us</p>
                </Link>
                <Link to='/about'>
                    <HiOutlineUserGroup />
                    <p> About Us</p>
                </Link>
                {/* <Link to='/'>
                    <BiUser />
                    <p>Profile</p>
                </Link> */}
            </ul>
        </div>
    )
}

export default Footer
