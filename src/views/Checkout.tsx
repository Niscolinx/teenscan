const Checkout = () => {
    return (
        <div className='checkout'>
            <h3>Checkout</h3>

            <select className='checkout__select'>
                <option value='localPay' >Local Deposit</option>
                <option value='Paystack'>Card Payment</option>
            </select>

            <div className="checkout__paymentType">

                <h3>
                    Account Details
                </h3>

                <p>Bank Name: <span>Gurantee Trust Bank</span></p>
                <p>Account Name: <span>Teens Can Blog Tech Comm.</span></p>
                <p>Account Number: <span>0632650272</span></p>
            </div>

            <div className='checkout__details'>
                <h3>Summary</h3>

                <div className='checkout__details--items'>
                    <p>Title of the course</p>
                    <p>N30,000</p>
                </div>

                <button className='button checkout__btn'>Complete Payment</button>
            </div>
        </div>
    )
}

export default Checkout
