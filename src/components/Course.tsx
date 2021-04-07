interface CourseProps {
    image: string
    title: string
    creator: string
    price: number
}

const Course = (props: CourseProps) => {
    const { price } = props

    const formattedPrice = price.toLocaleString()
    return (
        <div className='course'>
            <div>
                <img src={props.image} alt='courseImg' className='course_img' />
            </div>
            <div>
                <h3 className='course_title'>{props.title}</h3>
                <p className='course_creator'>{props.creator}</p>
                <p className='course_price'>₦{formattedPrice}</p>
            </div>
        </div>
    )
}

export default Course
