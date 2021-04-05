import Logo from '../assets/Logo.png'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            <div className="input-box">
            <BiSearch/>
            <input className='subHeader_input'/>
            </div>
        </div>
    )
}

export default Header