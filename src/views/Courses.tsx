import { useEffect, useState } from 'react'
import axios from 'axios'

import Course from '../components/Course'

import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import course5 from '../assets/course5.jpg'
import course6 from '../assets/course6.jpg'
import course7 from '../assets/course7.jpeg'

const Courses = () => {
    const [courses, setCourses] = useState([])

    const courseImages = [course1, course7, course3, course4, course5, course6, course2]

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


    return (
        <div className='section-courses1'>
            <header>
                <h2>Courses</h2>
            </header>

            <div className='courses__title--box'>
                <h1 className='courses__heading'>Collection of Courses</h1>
                <p className='courses__subHeading'>
                    Learn the latest skills to reach your professional goals.
                </p>
            </div>

            <div className='course__cards1'>
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

                {/* <Course
                    title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatem blanditiis culpa dolorem iusto eaque, enim tenetur corrupti dolores exercitationem ad debitis excepturi eveniet nam facilis quae, recusandae tempora. Officiis!'
                    creator='John Doe'
                    price={10000}
                    image={course2, course3, course4, course2, course2}
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
                /> */}
            </div>
        </div>
    )
}

export default Courses
