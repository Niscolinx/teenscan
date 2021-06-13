import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import testimonial from '../assets/testimonial.jpeg'
import testimonial1 from '../assets/testimonial1.jpeg'
import testimonial2 from '../assets/testimonial2.jpg'

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
        <div className='carousel-box'>
            <div className='carousel-box__item'>
                <h3>our esteemed clients</h3>
                <p>
                    Take a good look at some expressions from our esteemed
                    clients and supporters
                </p>
            </div>
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
                    <img src={testimonial} alt='' className='carousel__img' />
                    <div>
                        <p className='carousel__title'>
                            Lecturer, Abia State University
                        </p>
                        <p className='carousel__name'>Dr Emmanuel Shebbs </p>
                        <p className='carousel__testimony'>
                            Trust is built on those who know the road to the
                            future. Those people are Teens Can Blog
                        </p>
                    </div>
                </div>
                <div className='carousel__item'>
                    <img src={testimonial1} alt='' className='carousel__img' />
                    <div>
                        <p className='carousel__title'>
                            Founder, Darien Restaurant
                        </p>
                        <p className='carousel__name'>Chijioke Queeneth</p>
                        <p className='carousel__testimony'>
                            If there are people I trust who will create a better
                            future for young people it should be Teens Can Blog
                        </p>
                    </div>
                </div>
                <div className='carousel__item'>
                    <img src={testimonial2} alt='' className='carousel__img' />
                    <div>
                        <p className='carousel__title'>Software Engineer</p>
                        <p className='carousel__name'>Mr Roland Blessing</p>
                        <p className='carousel__testimony'>
                            If future generations are to remember us more with
                            gratitude than sorrow, we must achieve more than
                            just the miracles of technology and Teens Can Blog
                            is on that path.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselItem
