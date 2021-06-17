const Checkout = () => {
    return (
        <div className='checkout'>
            <h3>Checkout</h3>

            <select className='checkout__select'>
                <option value='localPay'>Local Deposit</option>
                <option value='Paystack'>Card Payment</option>
            </select>

            <div className='checkout__details'>
                <h3>Order details</h3>

                <div className='checkout__details--items'>
                    <h3>Title of the course</h3>
                    <h3>N30,000</h3>
                </div>

                <button className='button'>Complete Payment</button>
            </div>
        </div>
    )
}

export default Checkout
