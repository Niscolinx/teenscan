interface CourseProps {
    image: string
    title: string
    creator: string
    price: number
}

const Course = (props: CourseProps) => {
    const { price } = props

    console.log(price)

    const formattedPrice = price.toLocaleString()
    return (
        <div className='course'>
            <div className="course_imgbox">
            <img src={props.image} alt='courseImg' className='course_img' />

            </div>
            <div className='course_details'>
                <h3 className='course_title'>{props.title}</h3>
                <p className='course_creator'>{props.creator}</p>
                <h3 className='course_price'>₦{formattedPrice}</h3>
            </div>
        </div>
    )
}

export default Course
