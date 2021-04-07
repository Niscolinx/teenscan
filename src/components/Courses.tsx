import Course from "./Course"
import cardImg from '../assets/hero1.jpeg'
import cardImgs from '../assets/hero2.jpg'
import cardImgss from '../assets/hero3.jpg'
import cardImgsss from '../assets/hero.jpg'

const Courses = () => {
    return (
        <>
        <div>
           <h1 className='courses_heading'>Collection of courses</h1> 
           <p className='courses_subHeading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti vitae</p>

        </div>
        <div className="course_cards">
            <Course title='Title of the course' creator='John Doe' price={10000} image={cardImg}/>
            <Course title='Title of the course' creator='John Doe' price={14000} image={cardImgs}/>
            <Course title='Title of the course' creator='John Doe' price={19000} image={cardImgss}/>
            <Course title='Title of the course' creator='John Doe' price={22000} image={cardImgsss}/>
        </div>
        </>
    )
}

export default Courses