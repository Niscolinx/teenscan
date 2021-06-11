const Scrollable = (props: any) => {
    return (
        <div className='scrollable'>
            <div className='scrollable__item'>
                {props.children}{' '}
                <p className='scrollable__item--margin'>&nbsp;</p>
            </div>
            <div className='scrollable__overflowShadow'></div>
        </div>
    )
}

export default Scrollable
