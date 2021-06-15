import courseJson from '../../courses.json'

const Course = () => {

    const viewCourses = JSON.stringify(courseJson)

    console.log({viewCourses})


    return (
        <div className='courseItem'>
            
            <div className=''></div>
            <div></div>
        </div>
    )
}

export default Course;