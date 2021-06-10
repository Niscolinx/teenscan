import Teens2 from '../assets/teens2.png'
const Vision = () => {
    return (
        <div className='vision'>
            <div>
                <img src={Teens2} width='100%' height='100%' alt='' />
            </div>
            <div>
                <div>
                    <h2>The Future Belongs to Tech Minds</h2>
                    <p>
                        Teens Can Blog is a tech initiative targeted at
                        equipping young people with digital exploratory skills.
                        To become socially relevant and build the nation.
                    </p>
                </div>
                <div>
                    {' '}
                    <h2>Innovative Ideas</h2>
                    <p>
                        We believe that the future will be managed and
                        controlled by Tech experts. This is why we’re keen at
                        equipping the young people today with on demand Tech
                        skills to man their generation.
                    </p>
                </div>
                <div>
                    {' '}
                    <h2>Vision</h2>
                    <p>
                        To build a Nigerian community filled with independent
                        young Techprenuers.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vision
