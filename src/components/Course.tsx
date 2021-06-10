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
            <div className="course__imgbox">
            <img src={props.image} alt='courseImg' className='course__img' />

            </div>
            <div className='course__details'>
                <h3 className='course__title'>{props.title}</h3>
                <p className='course__creator'>{props.creator}</p>
                <h3 className='course__price'>₦{formattedPrice}</h3>
            </div>
        </div>
    )
}

export default Course
