const courseDetails = (props: any) => {
    const selectedCourse = props.match.params.id.split(':')[1]

    console.log({ props })

    return <div className='courseDetails'>course details</div>
}

export default courseDetails
