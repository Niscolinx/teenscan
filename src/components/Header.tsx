import Logo from '../assets/Logo.png'

const Header = () => {
    return (
        <div>
            <img src={Logo} alt="logo"/>
            <input className='subHeader_input'/>
        </div>
    )
}

export default Header