import React from 'react'
import team from '../assets/team.jpeg'
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import team7 from '../assets/team7.jpg'
import team8 from '../assets/team8.png'
import Scrollable from './Scrollable'

const Team = () => {
    return (
        <div className='team'>
            <div className='team__heading'>
                <h1>Our Proficient Team</h1>
                <p>Meet the brains behind TeensCanBlog</p>
            </div>

            <div className='team__profiles'>
                {/* <Scrollable> */}
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team5} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Founder/CEO</h3>
                        <p>Odoemena Augustine Chinonso</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team6} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Co-Founder</h3>
                        <p>Unachukwu Emmanuel</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team1} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Content Manager</h3>
                        <p>Ugwu Shedrack</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team7} alt='' />
                    </div>
                    <div className='team__profile--details'>
                        <h3>Digital Marketer</h3>
                        <p>Divine</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team8} alt='' />
                    </div>
                    <div className='team__profile--details'>
                        <h3>Graphics Designer</h3>
                        <p>Ebuka Ikenna John</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team2} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Marketing Manager</h3>
                        <p>Chidozie SomtoChukwu Christiana</p>
                    </div>
                </div>
                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team3} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Content Creator</h3>
                        <p>Maylor</p>
                    </div>
                </div>

                <div className='team__profile'>
                    <div className='team__img'>
                        <img src={team} alt='' />
                    </div>

                    <div className='team__profile--details'>
                        <h3>Software Engineer</h3>
                        <p>Igboanugwo Collins</p>
                    </div>
                </div>
                {/* </Scrollable> */}
            </div>
        </div>
    )
}

export default Team
