const courseDetail = (props: any) => {
    const selectedCourse = props.match.params.id.split(':')[1]

    console.log('course detail', props.location.state.props)

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

    console.log('title', title, 'id', id)

    return (
        <div className='courseDetail'>
            <div className='courseDetail__2'></div>
            <div className='courseDetail__1'>
                <h2>{title}</h2>
                <p>{description}</p>
                <p> Created by {creator}</p>
            </div>
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
    )
}

export default courseDetail
