import Story from '../components/Story'
import StoryPrimary from '../components/StoryPrimary'
import Team from '../components/Team'

const About = () => {
    return (
        <div className='about'>
            <header>
                <h2>About Us</h2>
            </header>
            <Story />
            <StoryPrimary/>
            <Team/>
        </div>
    )
}

export default About
