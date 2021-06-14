import Course from './Course'
import Scrollable from '../components/Scrollable'
import { FaLongArrowAltRight } from 'react-icons/fa'

import cardImg from '../assets/course1.jpg'
import cardImgs from '../assets/course1.jpg'
import cardImgss from '../assets/course1.jpg'
import cardImgssss from '../assets/course2.jpg'
import cardImgsss from '../assets/course3.jpg'

const RecentCourses = () => {
    return (
        <>
            <div className='recentCourses__title--box'>
                <h1 className='recentCourses__heading'>Recent Courses</h1>
                <p className='recentCourses__subHeading'>
                    Learn the latest skills to reach your professional goals.
                </p>
            </div>

            <div className='course__cards'>
                <Scrollable>
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
                </Scrollable>
            </div>

            <button className='btn recentCourses__btn'>
                View More
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
        </>
    )
}

export default RecentCourses
