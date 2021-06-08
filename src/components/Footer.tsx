import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            This is the footer

            <ul className="footer__mobileNav">
                <Link to='/'>Home</Link>
            </ul>
        </div>
    )
}

export default Footer