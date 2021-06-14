import Course from '../components/Course'

import course1 from '../assets/course1.jpg'
import course2 from '../assets/course2.jpg'
import course3 from '../assets/course3.jpg'
import course4 from '../assets/course4.jpg'
import course5 from '../assets/course5.jpg'
import course6 from '../assets/course6.jpg'

const Courses = () => {
    return (
        <div className='section-courses'>
            <div className='courses__title--box'>
                <h1 className='courses__heading'>Collection of Course</h1>
                <p className='courses__subHeading'>
                    Learn the latest skills to reach your professional goals.
                </p>
            </div>

            <div className='course__cards1'>
                    <Course
                        title='Everything to know about Blogging and Starting your own Blog'
                        creator='John Doe'
                        price={10000}
                        image={course1}
                    />
                    <Course
                        title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi voluptatem blanditiis culpa dolorem iusto eaque, enim tenetur corrupti dolores exercitationem ad debitis excepturi eveniet nam facilis quae, recusandae tempora. Officiis!'
                        creator='John Doe'
                        price={10000}
                        image={course2}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={10000}
                        image={course3}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={14000}
                        image={course4}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={19000}
                        image={course5}
                    />
                    <Course
                        title='Title of the course'
                        creator='John Doe'
                        price={22000}
                        image={course6}
                    />
                    
            </div>

     
        </div>
    )
}

export default Courses
