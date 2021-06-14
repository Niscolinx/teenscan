import Course from '../components/Course'
import Scrollable from '../components/Scrollable'
import { FaLongArrowAltRight } from 'react-icons/fa'

import cardImg from '../assets/course1.jpg'
import cardImgs from '../assets/course1.jpg'
import cardImgss from '../assets/course1.jpg'
import cardImgssss from '../assets/course2.jpg'
import cardImgsss from '../assets/course3.jpg'

const Courses = () => {
    return (
        <div className='section-courses'>
            <div className='course__title--box'>
                <h1 className='course__heading'>Recent course</h1>
                <p className='course__subHeading'>
                    Learn the latest skills to reach your professional goals.
                </p>
            </div>

            <div className='course__cards'>
                    <Course
                        title='Everything to know about Blogging and Starting your own Blog'
                        creator='John Doe'
                        price={10000}
                        image={cardImg}
                    />
                    <Course
                        title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatem blanditiis culpa dolorem iusto eaque, enim tenetur corrupti dolores exercitationem ad debitis excepturi eveniet nam facilis quae, recusandae tempora. Officiis!'
                        creator='John Doe'
                        price={10000}
                        image={cardImg}
                    />
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

            <button className='btn course__btn'>
                View More
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
        </div>
    )
}

export default Courses
