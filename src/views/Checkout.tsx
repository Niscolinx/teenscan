import { usePaystackPayment } from 'react-paystack'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Checkout = (props: any) => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [handleSummit, setHandleSummit] = useState(false)
    const [error, setError] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('')
    const [displayBackdrop, setDisplayBackdrop] = useState('none')

    const history = useHistory()
    const { title, price } = props.location.state

    const config = {
        email,
        firstName,
        lastName,
        amount: price * 100,
        publicKey: 'pk_test_93e3bae833c60377335c8a9e9ade423acdb9f9f7',
        
    }

    const formattedPrice = price.toLocaleString()

    const onSuccess = (reference: any) => {
        console.log('reference', reference)

        history.push('/courses')
    }

    const onClose = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config)


    const inputHandler = (input: any) => {
        const inputName = input.target.name
        const inputValue = input.target.value

        if (inputName === 'first_name') {
            setFirstName(inputValue)
        }
        if (inputName === 'last_name') {
            setLastName(inputValue)
        }

        if (inputName === 'user_email') {
            setEmail(inputValue)
        }
    }

    const handleForm = (e: any) => {
        e.preventDefault()

        setHandleSummit(true)

        if (email === '' || firstName === '' || lastName === '') {
            setError(true)
            console.log('not sent')
            setDisplayMessage('Fields cannot be empty')
        } else {
            setError(false)
            setDisplayMessage('...Sending')

            initializePayment(onSuccess, onClose)
        }
    }

    const toggleBackdrop = () => {
        setDisplayBackdrop('block')
    }

    return (
        <div className='checkout'>
            <div
                className='checkout__backdrop'
                style={{ display: displayBackdrop }}
            >
                <div className='checkout-box'>
                    {handleSummit && (
                        <p className={error ? 'form__displayError' : ''}>
                            {displayMessage}
                        </p>
                    )}
                    <form className='checkout-form' onSubmit={handleForm}>
                        <div className='checkout-form__item'>
                            <label htmlFor='name'>FirstName:</label>
                            <input
                                className='checkout-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='first_name'
                                value={firstName}
                            />
                        </div>
                        <div className='checkout-form__item'>
                            <label htmlFor='name'>LastName:</label>
                            <input
                                className='checkout-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='last_name'
                                value={lastName}
                            />
                        </div>

                        <div className='checkout-form__item'>
                            <label htmlFor='mail'>Your e-mail:</label>
                            <input
                                className='checkout-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='user_email'
                                value={email}
                            />
                        </div>

                        <button className='button checkout__btn'>
                            Proceed
                        </button>
                    </form>
                </div>
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

                    <button
                        className='button checkout__btn'
                        onClick={toggleBackdrop}
                    >
                        Pay with Card
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
