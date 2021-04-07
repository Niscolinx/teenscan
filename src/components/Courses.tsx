import Course from "./Course"
import cardImg from '../assets/hero1.jpeg'

const Courses = () => {
    return (
        <>
        <div>
           <h1 className='courses_heading'>Collection of courses</h1> 
           <p className='courses_subHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti vitae</p>

        </div>
        <div className="course_cards">
            <Course title='Title of the course' creator='John Doe' price={10000} image={cardImg}/>
        </div>
        </>
    )
}

export default Courses