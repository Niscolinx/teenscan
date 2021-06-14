import React from 'react'
import team from '../assets/team.jpeg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import team7 from '../assets/team7.jpg'
import team8 from '../assets/team8.png'
import Scrollable from './Scrollable'

const Team = () => {
    return (
        <div className='team'>
            <div className='team__heading'>
                <h1>Our Proficient Tea</h1>
                <p>Meet the brains behind TeensCanBlog</p>
            </div>

            <div className='team__profiles'>
                <Scrollable>
                    <div className='team__profile'>
                        <img src={team5} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team6} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team1} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team7} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team8} alt='' />
                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team2} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team3} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team4} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                    <div className='team__profile'>
                        <img src={team} alt='' />

                        <div className='team__profile--details'>
                            <h3>Software Engineer</h3>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </Scrollable>
            </div>
        </div>
    )
}

export default Team
