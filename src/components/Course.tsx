import courseImg from '../assets/hero1.jpeg'

interface CourseProps {
    image: string,
    title: string,
    creator: string,
    price: number
}

const Course = (props: CourseProps) => {
    return (
        <div className='course'>
            <img src={courseImg} alt='courseImg' className='card_img' />
            <h3 className='course_title'>Title of the course</h3>
            <p className='course_creator'> John Doe</p>
            <p className='course_price'>N10,000</p>
        </div>
    )
}

export default Course