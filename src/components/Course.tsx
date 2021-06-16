import {useHistory, useLocation} from 'react-router-dom'

interface CourseProps {
    image: string
    title: string
    creator: string
    price: number
    id: number
}

const Course = (props: CourseProps) => {

    const history = useHistory()
    const location = useLocation()
    console.log('location', location)
    console.log(history)

    const handleClick = () => {
        history.push('/')
    }
    
    const { price } = props

    const formattedPrice = price.toLocaleString()
    return (
        <div className='course'>
            <div className="course__imgbox">
            <img src={props.image} alt='courseImg' className='course__img' />

            </div>
            <div className='course__details'>
                <h3 className='course__title'>{props.title} </h3>
                <p className='course__creator'>{props.creator}</p>
                <h3 className='course__price'>₦{formattedPrice}</h3>
            </div>
            <button className='button course__btn' onClick={handleClick}>View</button>
        </div>
    )
}

export default Course
