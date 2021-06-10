import Courses from '../components/Courses'
import Hero from '../components/Hero'
import Vision from '../components/Vision'

const Home = () => {
    return (
        <>
            <div className='section-hero'><Hero/> </div>
            <div className="section-courses"><Courses /></div>
            <div className='section-vision'><Vision/></div>
        </Vision>
    )
}

export default Home
