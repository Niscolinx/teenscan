const Scrollable = (props: any) => {
    console.log(props.children)
    return (
        <div className='scrollable'>
            <div className='scrollable__item'>
                {props.children}{' '}
                <div className='scrollable__item--margin'></div>
            </div>
            <div className='scrollable__overflowShadow'></div>
        </div>
    )
}

export default Scrollable
