import Course from './Course'
import cardImg from '../assets/course1.jpg'
import cardImgs from '../assets/course1.jpg'
import cardImgss from '../assets/course1.jpg'
import cardImgssss from '../assets/course2.jpg'
import cardImgsss from '../assets/course3.jpg'

const Courses = () => {
    return (
        <>
            <div className='courses__title--box'>
                <h1 className='courses__heading'>Collection of courses</h1>
                <p className='courses__subHeading'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti vitae
                </p>
            </div>
            <div className='course__cards'>
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={10000}
                    image={cardImg}
                />
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={14000}
                    image={cardImgs}
                />
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={19000}
                    image={cardImgss}
                />
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={22000}
                    image={cardImgsss}
                />
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={22000}
                    image={cardImgssss}
                />
                <Course
                    title='Title of the course'
                    creator='John Doe'
                    price={22000}
                    image={cardImgsss}
                />
            </div>
        </>
    )
}

export default Courses
