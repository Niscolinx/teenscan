import HeroSvg from '../assets/herowave.svg'
import ReactTypingEffect from 'react-typing-effect'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__box'>
                <div className='hero__container'>
                    <h1 className='hero__box--title'>
                        Learn your way with <span>TeensCanBlog</span> to{' '}
                        <ReactTypingEffect
                            text={[
                                'Web Development',
                                'Blogging',
                                'Forex',
                                'Data Analysis',
                                'Public Speaking',
                                'Graphics Design',
                                'Digital Marketing',
                            ]}
                            className='hero__typingEffect'
                            speed={30}
                            eraseSpeed={30}
                            eraseDelay={3000}
                        />
                    </h1>{' '}
                    <p className='hero__box--text'>
                        Explore your creativity with classes in Data Analysis,
                        Web Development, design, and more.
                    </p>
                    <button className='btn hero__btn'>
                        Get Started{' '}
                        <span>
                            <FaLongArrowAltRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className='hero__svg'>
                <img src={HeroSvg} width='100%' height='auto' alt='' />
            </div>
        </div>
    )
}

export default Hero
