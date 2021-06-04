import HeroSvg from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='hero'>
            {/* <div className='hero_box'>
                 <h1 className='hero_box--title'>Dream Up</h1>
                <p className='hero_box--text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci natus et ipsam, odio veritatis accusantium at,
                    maiores rem ea quod enim soluta quibusdam totam dignissimos
                    quaerat. Cum temporibus doloribus nulla!
                </p> 

            </div> */}
            <div className='hero_box'>
            <img src={HeroSvg} width='100%' height='100%' alt=''/>
            </div>
        </div>
    )
}

export default Hero
