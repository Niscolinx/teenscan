import { PaystackButton } from 'react-paystack'
import { useHistory } from 'react-router-dom'
import {useState} from 'react'

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

             const [email, setEmail] = useState('')
             const [firstName, setFirstName] = useState('')
             const [lastName, setLastName] = useState('')
             const [handleSummit, setHandleSummit] = useState(false)
             const [error, setError] = useState(false)
             const [displayMessage, setDisplayMessage] = useState('')

             const inputHandler = (input: any) => {
                 const inputName = input.target.name
                 const inputValue = input.target.value

                 if (inputName === 'user_name') {
                     setFirstName(inputValue)
                 }
                 if (inputName === 'message') {
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

                    
                 }
             }

    return (
        <div className='checkout'>
            <div className='checkout__backdrop'>
                <div className='contact-box'>
                    <h3 className='heading-3'>Leave a message</h3>
                    {handleSummit && (
                        <p
                            className={
                                error
                                    ? 'form__displayError'
                                    : ''
                            }
                        >
                            {displayMessage}
                        </p>
                    )}
                    <form className='contact-form' onSubmit={handleForm}>
                        <div className='contact-form__item'>
                            <label htmlFor='name'>FirstName:</label>
                            <input
                                className='contact-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='user_name'
                                value={firstName}
                            />
                        </div>
                        <div className='contact-form__item'>
                            <label htmlFor='name'>LastName:</label>
                            <input
                                className='contact-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='user_name'
                                value={lastName}
                            />
                        </div>

                        <div className='contact-form__item'>
                            <label htmlFor='mail'>Your e-mail:</label>
                            <input
                                className='contact-form__input'
                                onChange={inputHandler}
                                type='text'
                                name='user_email'
                                value={email}
                            />
                        </div>

                     
                        <button
                            type='submit'
                            className='button contact-form__btn'
                        >
                            send
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

                    <PaystackButton {...componentProps} />
                </div>
            </div>
        </div>
    )
}

export default Checkout
