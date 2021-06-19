import { PaystackButton } from 'react-paystack'
import {useHistory} from 'react-router-dom'

const Checkout = (props: any) => {

    const history = useHistory()
    const { title, price } = props.location.state

    const config = {
        email: 'teenscanblog@gmail.com',
        amount: price * 100,
        publicKey: 'pk_test_93e3bae833c60377335c8a9e9ade423acdb9f9f7',
    }

    const formattedPrice = price.toLocaleString()

    const handlePaystackSuccessAction = (reference: any) => {
        console.log('reference', reference)

        history.push('/courses')
    }

    
    const handlePaystackCloseAction = () => {
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Pay With Card',
        className:'button checkout__btn',
        onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    }

    return (
        <div className='checkout'>
            <div className="checkout__backdrop">
                <form className="checkout__form">
                    <input />
                    <input />
                    <input />

                    
                </form>
            </div>
            <h3 className='checkout__header'>Checkout</h3>

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
            </div>
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

                    <PaystackButton {...componentProps} />
                </div>
            </div>
        </div>
    )
}

export default Checkout
