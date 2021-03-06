import Teens4 from '../assets/teens4.jpeg'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {useHistory} from 'react-router-dom'


const BookUs = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/contact')
    }
    return (
        <div className='bookUs'>
            <div className='bookUs__1'>
                <div className='bookUs__1--item'>
                    <h1>
                        We also provide tech training and mentorship, campus
                        trainings, community projects etc.
                    </h1>

                    <button className='btn bookUs__btn' onClick={handleClick}>
                        Get In Touch{' '}
                        <span>
                            <FaLongArrowAltRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className='bookUs__2'>
                <img src={Teens4} width='100%' height='100%' alt='' />
            </div>
        </div>
    )
}

export default BookUs
