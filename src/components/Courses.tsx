import Course from './Course'
import cardImg from '../assets/teens3.png'
import cardImgs from '../assets/teens3.png'
import cardImgss from '../assets/teens3.png'
import cardImgssss from '../assets/hero4.jpg'
import cardImgsss from '../assets/hero.jpg'

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
