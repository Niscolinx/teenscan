
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero_box'>
                <svg
                    viewBox='0 0 500 500'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='100%'
                    id='blobSvg'
                    aria-label='hello'
                >
                    <defs>
                        <linearGradient
                            id='gradient'
                            x1='0%'
                            y1='0%'
                            x2='0%'
                            y2='100%'
                        >
                            <stop
                                offset='0%'
                                style={{ stopColor: 'rgb(233, 100, 67)' }}
                            ></stop>
                            <stop
                                offset='100%'
                                style={{ stopColor: 'rgb(144, 78, 149)' }}
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        id='blob'
                        d='M307.5,356.5Q127,463,136.5,266Q146,69,317,159.5Q488,250,307.5,356.5Z'
                        fill='url(#gradient)'
                    ></path>
                </svg>
                <h1 className='hero_box--title'>Dream Up</h1>
                <p className='hero_box--text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci natus et ipsam, odio veritatis accusantium at,
                    maiores rem ea quod enim soluta quibusdam totam dignissimos
                    quaerat. Cum temporibus doloribus nulla!
                </p>
            </div>
        </div>
    )
}

export default Hero
