import HeroSvg from '../assets/herowave.svg'
import ReactTypingEffect from 'react-typing-effect'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__box'>
                <div>
                    <h1 className=''>
                        Learn your way with <span>TeensCanBlog</span> to{' '}
                        <ReactTypingEffect
                            text={[
                                'Web Development',
                                'Blogging',
                                'Forex',
                                'Data Analysis',
                                'Public Speaking',
                                'Graphic Design',
                                'Digital Marketing',
                            ]}
                            className='text-blue-900'
                            speed={30}
                            eraseSpeed={30}
                            eraseDelay={3000}
                        />
                    </h1>{' '}
                    <p className='hero__box--text'>
                        Explore your creativity with classes in Data Analysis,
                        Web Development, design, and more.
                    </p>
                </div>
            </div>
            <div className='hero__svg'>
                <img src={HeroSvg} width='100%' height='auto' alt='' />
            </div>
        </div>
    )
}

export default Hero
