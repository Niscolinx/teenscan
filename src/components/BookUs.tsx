import Teens3 from '../assets/teens3.png'


const BookUs = () => {
    return (
        <div className='bookUs'>
            <div className='bookUs__2'>
                <div className='bookUs__2--item'>
                    <h2>The Future Belongs to Tech Minds</h2>
                    <p>
                        Teens Can Blog is a tech initiative targeted at
                        equipping young people with digital exploratory skills.
                        To become socially relevant and build the nation.
                    </p>
                </div>
                <div className='bookUs__2--item'>
                    {' '}
                    <h2>Innovative Ideas</h2>
                    <p>
                        We believe that the future will be managed and
                        controlled by Tech experts. This is why we’re keen at
                        equipping the young people today with on demand Tech
                        skills to man their generation.
                    </p>
                </div>
                <div className='bookUs__2--item'>
                    {' '}
                    <h2>bookUs</h2>
                    <p>
                        To build a Nigerian community filled with independent
                        young Techprenuers.
                    </p>
                </div>
            </div>
            <div className='bookUs__1'>
                <img src={Teens3} width='100%' height='100%' alt='' />
            </div>
        </div>
    )
}

export default BookUs
