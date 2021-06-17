const Checkout = () => {
    return (
        <div className='checkout'>
            <h3>Checkout</h3>

            <div>
                <label className='container'>
                    One
                    <input type='checkbox' checked />
                    <span className='checkmark'></span>
                </label>

                <label className='container'>
                    Two
                    <input type='checkbox' />
                    <span className='checkmark'></span>
                </label>
            </div>
        </div>
    )
}

export default Checkout
