import TcbVideo from '../assets/tcbvideo.mp4'
import TcbVideoWebm from '../assets/tcbvideo.webm'

const StoryPrimary = () => {
    return (
        <div className='storyPrimary'>
            <div className='storyPrimary__description'>
                    <div className='storyPrimary__description--item'>
                        <h2>The Future Belongs to Tech Minds</h2>
                        <p>
                            Teens Can Blog is a tech initiative targeted at
                            equipping young people with digital exploratory
                            skills. To become socially relevant and build the
                            nation.
                        </p>
                    </div>
                    <div className='storyPrimary__description--item'>
                        {' '}
                        <h2>Innovative Ideas</h2>
                        <p>
                            We believe that the future will be managed and
                            controlled by Tech experts. This is why we’re keen
                            at equipping the young people today with on demand
                            Tech skills to man their generation.
                        </p>
                    </div>
                    <div className='storyPrimary__description--item'>
                        {' '}
                        <h2>Vision</h2>
                        <p>
                            To build a Nigerian community filled with
                            independent young Techprenuers.
                        </p>
                </div>
            </div>
            <div className='storyPrimary__video'>
                <video
                    autoPlay
                    muted
                    loop
                    className='storyPrimary__video--content'
                >
                    <source src={TcbVideo} type='video/mp4' />
                    <source src={TcbVideoWebm} type='video/webm' />
                    Your browser is not supported
                </video>
                <div className='storyPrimary__video--text'>
                    <h1>
                        Teens Can Blog is a tech initiative targeted at
                        equipping young people with digital exploratory skills.
                        To become socially relevant and build the nation.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default StoryPrimary
