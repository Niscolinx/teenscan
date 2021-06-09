import { Link } from 'react-router-dom'
import { HiOutlineCollection, HiOutlineUserGroup } from 'react-icons/hi'
import { BiHome, BiMailSend, BiUser } from 'react-icons/bi'
import { SiMailDotRu } from 'react-icons/si'
import { AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare,AiFillLinkedin} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__main'>
                <div className='footer__item'>
                    <h3>TeensCanBlog</h3>
                    <ul>
                        <li>
                            {' '}
                            <span>
                                <FaMapMarkedAlt />
                            </span>{' '}
                            Caroline Odu ,Ejigbo Lagos Nigeria.
                        </li>
                        <li>
                            {' '}
                            <span>
                                <AiFillPhone />
                            </span>{' '}
                            09066287396
                        </li>
                        <li>
                            {' '}
                            <span>
                                <SiMailDotRu />
                            </span>{' '}
                            suppor@teenscanblog.com
                        </li>
                    </ul>
                </div>
                
                <div className='footer__item'>
                  
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
                        <Link to='/'>Courses</Link>
                        <Link to='/'>Instructors</Link>
                        <Link to='/'>Events</Link>
                    </ul>
                </div>
                <div className='footer__item'>
                    <h3>Useful Links</h3>
                    <ul>
                        <Link to='/'>About</Link>
                        <Link to='/'>Contact Us</Link>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <div>
                    <div>
                        <p>Follow Us |</p>
                        <AiFillFacebook/>
                        <AiFillInstagram/>
                        <AiFillTwitterSquare/>
                        <AiFillLinkedin/>
                    </div>
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
