import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'
import team5 from '../assets/team5.jpg'
import team6 from '../assets/team6.jpg'
import team7 from '../assets/team7.jpg'
import team8 from '../assets/team8.jpeg'

const CarouselItem = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    }
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition='all 1'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px carousel'
        >
            <div className='carousel__item'>
                <img src={team1} alt='' className='carousel__img' />
                <div>
                    <p className='carousel__title'>Founder/CEO</p>
                    <p className='carousel__name'>
                        Odoemena Augustine Chinonso
                    </p>
                </div>
            </div>
            <div className='carousel__item'>
                <img src={team2} alt='' className='carousel__img' />
                <div>
                    <p className='carousel__title'>Founder/CEO</p>
                    <p className='carousel__name'>
                        Odoemena Augustine Chinonso
                    </p>
                </div>
            </div>
            <div className='carousel__item'>
                <img src={team3} alt='' className='carousel__img' />
                <div>
                    <p className='carousel__title'>Founder/CEO</p>
                    <p className='carousel__name'>
                        Odoemena Augustine Chinonso
                    </p>
                </div>
            </div>
            <div className='carousel__item'>
                <img src={team8} alt='' className='carousel__img' />
                <div>
                    <p className='carousel__title'>Founder/CEO</p>
                    <p className='carousel__name'>
                        Odoemena Augustine Chinonso
                    </p>
                </div>
            </div>
        </Carousel>
    )
}

export default CarouselItem
