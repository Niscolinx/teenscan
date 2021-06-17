import { useHistory } from 'react-router-dom'
import course1 from '../assets/course1.jpg'

interface CourseProps {
    image: string
    title: string
    creator: string
    price: number
    id: number
}

const Course = (props: CourseProps) => {

    console.log('single image', require(props.image))
 

    const history = useHistory()

    const handleClick = () => {
        history.push(`/courseDetail/:${props.id}`)
    }

    const { price } = props

    const formattedPrice = price.toLocaleString()
    return (
        <div className='course'>
            <div className='course__imgbox'>
                <img
                    src={`../assets/${props.image}`}
                    alt='courseImg'
                    className='course__img'
                />
            </div>
            <div className='course__details'>
                <h3 className='course__title'>{props.title} </h3>
                <p className='course__creator'>{props.creator}</p>
                <h3 className='course__price'>₦{formattedPrice}</h3>
            </div>
            <button className='button course__btn' onClick={handleClick}>
                View
            </button>
        </div>
    )
}

export default Course
