import { useHistory } from 'react-router-dom'

const CourseDetail = (props: any) => {

    const history = useHistory()


    const {
        title,
        id,
        creator,
        price,
        image,
        description,
        includes,
        objectives,
        overview,
        requirements,
    } = props.location.state.props

    const formattedPrice = price.toLocaleString()

    const handleBuy = () => {
        history.push('/checkout', props)
    }

    return (
        <div className='courseDetail'>
            <div className='courseDetail__primary'>
                <div className='courseDetail__2'>
                    <img src={image} alt='' />
                </div>
                <div className='courseDetail__1'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p className='courseDetail__creator'>
                        Created by <span>{creator}</span>
                    </p>
                    <h3>₦{formattedPrice}</h3>

                    <button
                        className='button courseDetail__btn'
                        onClick={handleBuy}
                    >
                        Buy now
                    </button>
                </div>
            </div>
            <div className='courseDetail__secondary'>
                <div>
                    <h3>What you'll learn</h3>

                    <ul>
                        {objectives &&
                            objectives.map((item: any, index: number) => {
                                return <li key={index}>{item}</li>
                            })}
                    </ul>
                </div>
                <div>
                    <h3>Course Content</h3>

                    <ul>
                        {overview &&
                            overview.map((item: any, index: number) => {
                                return <li key={index}>{item}</li>
                            })}
                    </ul>
                </div>
                <div>
                    <h3>Requirements</h3>

                    <ul>
                        {requirements &&
                            requirements.map((item: any, index: number) => {
                                return <li key={index}>{item}</li>
                            })}
                    </ul>
                </div>
                <div>
                    <h3>This course includes</h3>

                    <ul>
                        {includes &&
                            includes.map((item: any, index: number) => {
                                return <li key={index}>{item}</li>
                            })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
