const Checkout = (props: any) => {
    console.log('checkout props', props.location.state)
    const { title, price } = props.location.state

    const formattedPrice = price.toLocaleString()

    return (
        <div className='checkout'>
            <h3 className='checkout__header'>Checkout</h3>

            <select className='checkout__select'>
                <option value='localPay'>Local Deposit</option>
                <option value='Paystack'>Card Payment</option>
            </select>

            <div className='checkout__paymentType'>
                <h4>Account Details</h4>

                <div className='checkout__paymentType--items'>
                    <div>
                        <span>Bank Name:</span>
                        <p className='checkout__paymentType--item'>
                            Gurantee Trust Bank
                        </p>
                    </div>
                    <div>
                        <span>Account Name:</span>
                        <p className='checkout__paymentType--item'>
                            Teens Can Blog Tech Comm.
                        </p>
                    </div>
                    <div>
                        <span>Account Number:</span>
                        <p className='checkout__paymentType--item'>
                            0632650272
                        </p>
                    </div>
                </div>
            </div>

            <div className='checkout__details'>
                <h4>Summary</h4>

                <div className='checkout__details--items'>
                    <div>
                        <span>Course:</span>
                        <p className='checkout__details--item'>{title}</p>
                    </div>
                    <div>
                        <span>Price:</span>
                        <p className='checkout__details--item'>
                            ₦{formattedPrice}{' '}
                        </p>
                    </div>
                </div>

                <button className='button checkout__btn'>
                    Complete Payment
                </button>
            </div>
        </div>
    )
}

export default Checkout
