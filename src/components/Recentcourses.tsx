import { FaLongArrowAltRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import Course from './Course'
import Scrollable from '../components/Scrollable'

import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import course5 from '../assets/course5.jpg'
import course6 from '../assets/course6.jpg'

const RecentCourses = () => {

    const [courses, setCourses] = useState([])
    
    const history = useHistory()

    const courseImages = [course1, course2, course3, course4, course5, course6]
    
    useEffect(() => {
        axios('/courses.json')
            .then((res) => {
                const data = res.data
                setCourses(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleClick = () => {
        history.push('/courses')
    }
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
                    {courses.map((course: any, index: number) => {
                        return (
                            <Course
                                title={course.title}
                                creator={course.creator}
                                price={course.price}
                                image={courseImages[index]}
                                description={course.description}
                                includes={course.includes}
                                requirements={course.requirements}
                                overview={course.overview}
                                objectives={course.objectives}
                                id={course.id}
                            />
                        )
                    })}
                </Scrollable>
            </div>

            <button className='btn recentCourses__btn' onClick={handleClick}>
                View More
                <span>
                    <FaLongArrowAltRight />
                </span>
            </button>
        </>
    )
}

export default RecentCourses
