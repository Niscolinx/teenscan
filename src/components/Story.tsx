import Teens4 from '../assets/teens3.png'
const Story = () => {

    return (
        <div className='story'>
            <div className='story__1'>
                <div className='story__1--item'>
                    <h1>
                        Who We Are
                    </h1>

                    <p>
                        We are a registered business enterprise that is
                        passionately committed to spurring technological
                        innovation in young people , formed by a carefully
                        curated team of Tech Experts, web developers, engineers
                        and interaction designers with a focus on developing the
                        next generation with digital explorational skills.
                        Equipping young people in tertiary institutions, high
                        schools and local communities with on-demand Tech skills
                        and mentoring them till become experts and become
                        socially relevant by integrating their passion with
                        technology. To build the entrepreneurship mindset in
                        them, so they become enthusiastic about critical
                    </p>
                </div>
            </div>
            <div className='story__2'>
                <img src={Teens4} width='100%' height='100%' alt='' />
            </div>
        </div>
    )




}

export default Story