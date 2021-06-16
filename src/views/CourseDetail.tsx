const courseDetail = (props: any) => {
    const selectedCourse = props.match.params.id.split(':')[1]

    console.log({ props })

    return (<div className='courseDetail'>course details</div>)
}

export default courseDetail
