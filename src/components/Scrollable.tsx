const Scrollable = (props: any) => {
    return (
        <div className='scrollable'>
            {props.children}
            <div className='scrollable__overflowShadow'></div>
        </div>
    )
}

export default Scrollable
