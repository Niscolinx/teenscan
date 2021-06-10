import Courses from '../components/Courses'
import Hero from '../components/Hero'
import Vision from '../components/Vision'
import BookUs from '../components/BookUs'

import svg from '../assets/herowave.svg'

const Home = () => {
    return (
        <>
            <div className='section-hero'>
                <Hero />{' '}
            </div>
            <div className='section-wrap'>
                <img src={svg} alt=''/>
                <div className='section-courses'>
                    <Courses />
                </div>
                <div className='section-vision'>
                    <Vision />
                </div>
                <div className='section-bookUs'>
                    <BookUs />
                </div>
            </div>
        </>
    )
}

export default Home
