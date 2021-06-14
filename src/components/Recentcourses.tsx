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
                        image={course1}
                        id={1}
                    />
                    <Course
                        title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatem blanditiis culpa dolorem iusto eaque, enim tenetur corrupti dolores exercitationem ad debitis excepturi eveniet nam facilis quae, recusandae tempora. Officiis!'
                        creator='John Doe'
                        price={10000}
                        image={course2}
                        id={2}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={10000}
                        image={course3}
                        id={3}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={14000}
                        image={course4}
                        id={4}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={19000}
                        image={course5}
                        id={5}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={22000}
                        image={course6}
                        id={6}
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
