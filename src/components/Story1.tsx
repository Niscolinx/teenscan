import TcbVideo from '../assets/tcbvideo.mp4'
import TcbVideoWebm from '../assets/tcbvideo.webm'

const Story = () => {
    return (
        <div className='story1'>
            <div className='story1__2'>
                <video autoPlay muted loop className='story1__2--video'>
                    <source src={TcbVideo} type='video/mp4' />
                    <source src={TcbVideoWebm} type='video/webm' />
                    Your browser is not supported
                </video>
            </div>
            <div className='story1__1'>
                <h1>
                    Teens Can Blog is a tech initiative targeted at equipping
                    young people with digital exploratory skills. To become
                    socially relevant and build the nation.
                </h1>
            </div>
        </div>
    )
}

export default Story
