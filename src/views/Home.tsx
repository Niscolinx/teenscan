import RecentCourses from '../components/Recentcourses'
import Hero from '../components/Hero'
import Vision from '../components/Vision'
import BookUs from '../components/BookUs'
import CarouselItem from '../components/Carousel'

//import svg from '../assets/herowave.svg'

const Home = () => {
    return (
        <>
            <div className='section-hero'>
                <Hero />{' '}
            </div>
            <div className='section-wrap'>
                <div className='section-courses'>
                    <RecentCourses />
                </div>
                <div className='section-vision'>
                    <Vision />
                </div>
                <div className='section-bookUs'>
                    <BookUs />
                </div>
                <div className='section-testimonial'>
                    <CarouselItem />
                </div>
            </div>
        </>
    )
}

export default Home
