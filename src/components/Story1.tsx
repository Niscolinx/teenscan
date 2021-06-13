import TcbVideo from '../assets/tcbvideo.mp4'
import TcbVideoWebm from '../assets/tcbvideo.webm'

const Story = () => {
    return (
        <div className='story'>
            <div className='story__1'>
                <h1>Who We Are</h1>

              
            </div>
         
            <div className='bg-video'>
                <video className='bg-video__content' autoPlay muted loop>
                    {/* <source src={TcbVideo} type='video/mp4' /> */}
                 <source src={TcbVideoWebm} type="video/webm"/> 
                    Your browser is not supported
                </video>
            </div>
        </div>
    )
}

export default Story
