import Courses from '../components/Courses'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <div className='section-hero'><Hero/> </div>
            <div className="section-courses"><Courses/></div>
        </>
    )
}

export default Home
