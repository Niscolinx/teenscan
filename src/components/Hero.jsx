import HeroSvg from '../assets/herowave.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__box'>
                 <h1 className='hero__box--title'>Dream Up</h1>
                <p className='hero__box--text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci natus et ipsam, odio veritatis accusantium at,
                    maiores rem ea quod enim soluta quibusdam totam dignissimos
                    quaerat.poribus doloribus nulla!
                </p> 

            </div>
            <div className='hero__svg'>
            <img src={HeroSvg} width='100%' height='auto' alt=''/>
            </div>
        </div>

    )
}

export default Hero
