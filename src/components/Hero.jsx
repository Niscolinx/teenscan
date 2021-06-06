import HeroSvg from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero_box'>
                 <h1 className='hero_box--title'>Dream Up</h1>
                <p className='hero_box--text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci natus et ipsam, odio veritatis accusantium at,
                    maiores rem ea quod enim soluta quibusdam totam dignissimos
                    quaerat.poribus doloribus nulla!
                </p> 

            </div>
            <div className='hero_svg'>
            {/* <img src={HeroSvg} width='100%' height='auto' alt=''/> */}
            </div>
        </div>
//         <>
//         <div className='spotlight-container'>
//   <div className='wrap'>
//     <div className='spotlight'></div>
//   </div>
// </div>
// <div className='wave-container'>
//   <div className='wrap'>
//     <div className='wave'>
      
//         <svg viewBox="0 1 450 200" preserveAspectRatio="none meet" className='herosvg'>
//                 <path d="M-50,100 L-1,100 C150,200 300,0 450,102 L600,100 L600,300 L-250,300 L-250,Z" style={{ fill:'white',stroke:'#e1d0bc', strokeWidth:'15'}} className='heropath'></path>
//         </svg>

//     </div>
//   </div>
// </div>
// </>
    )
}

export default Hero
