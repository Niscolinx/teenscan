const courseDetail = (props: any) => {
    const selectedCourse = props.match.params.id.split(':')[1]

    console.log('course detail', props.location.state.props)

    const { title, id, creator, price, image, includes, objectives, overview, requirements } = props.location.state.props

    console.log('title', title, 'id', id)

    return (
        <div className='courseDetail'>
            course details
            <h1>{title}</h1>
        </div>
    )
}

export default courseDetail
