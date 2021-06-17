const courseDetail = (props: any) => {
    const selectedCourse = props.match.params.id.split(':')[1]

    console.log('course detail', props.location.state.props)

    const { title, id, creator, price, image, includes, objectives, overview, requirements } = props.location.state.props

    console.log('title', title, 'id', id)

    return (
        <div className='courseDetail'>
            <div className='courseDetail__1'>
                <h2>{ title}</h2>

            </div>
            <div className='courseDetail__2'></div>
        </div>
    )
}

export default courseDetail
