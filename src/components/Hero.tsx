import hero from '../assets/hero4.jpg'

const Hero = () => {
    return (
        <div className='hero' style={{background: `url(${hero})`, height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className="hero_box">
            <h1>Dream Up</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci natus et ipsam, odio veritatis accusantium at, maiores rem ea quod enim soluta quibusdam totam dignissimos quaerat. Cum temporibus doloribus nulla!</p>

            </div>
        </div>
    )
}

export default Hero
