import TcbVideo from '../assets/tcbvideo.mp4'
import TcbVideoWebm from '../assets/tcbvideo.webm'

const Story = () => {
    return (
        <div className='story'>
            <div className='story__1'>
                <h1>Who We Are</h1>
            </div>

            <video className='story__2' autoPlay muted loop>
                <source src={TcbVideo} type='video/mp4' />
                <source src={TcbVideoWebm} type='video/webm' />
                Your browser is not supported
            </video>
        </div>
    )
}

export default Story
