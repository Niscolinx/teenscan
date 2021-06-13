import Teens4 from '../assets/teens4.jpeg'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Story = () => {

    return (


        <div className='story'>
            <div className='story__1'>
                <div className='story__1--item'>
                    <h1>
                        We also provide tech training and mentorship, campus
                        trainings, community projects etc.
                    </h1>

                    <button className='btn story__btn'>
                        Get In Touch{' '}
                        <span>
                            <FaLongArrowAltRight />
                        </span>
                    </button>
                </div>
            </div>
            <div className='story__2'>
                <img src={Teens4} width='100%' height='100%' alt='' />
            </div>
        </div>
    )




}

export default Story