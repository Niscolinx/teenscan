import {useState} from 'react'
import emailjs from 'emailjs-com'
import { AiFillPhone } from 'react-icons/ai'
import { SiMailDotRu } from 'react-icons/si'
import { FaMapMarkedAlt } from 'react-icons/fa'

const Form = () => {
         const [email, setEmail] = useState('')
         const [message, setMessage] = useState('')
         const [name, setName] = useState('')
         const [handleSummit, setHandleSummit] = useState(false)
         const [error, setError] = useState(false)
         const [displayMessage, setDisplayMessage] = useState('')

         const inputHandler = (input: any) => {
             const inputName = input.target.name
             const inputValue = input.target.value

             if (inputName === 'user_name') {
                 setName(inputValue)
             }

             if (inputName === 'user_email') {
                 setEmail(inputValue)
             }

             if (inputName === 'message') {
                 setMessage(inputValue)
             }
         }


         const templateParams = {
             user_name: name,
             user_email: email,
             message,
         }

         const handleForm = (e: any) => {
             e.preventDefault()

             setHandleSummit(true)

             if (email === '' || message === '' || name === '') {
                 setError(true)
                 console.log('not sent')
                 setDisplayMessage('Fields cannot be empty')
             } else {
                 setError(false)
                 setDisplayMessage('...Sending')

                 emailjs
                     .send(
                         'service_ug3kztv',
                         'template_1fpejxx',
                         templateParams,
                         'user_TyUAlfFTW7kMzOobPhtRV'
                     )
                     .then(
                         (result) => {
                             setDisplayMessage('Message sent')
                             console.log(result.text, 'email sent')
                             setEmail('')
                             setName('')
                             setMessage('')
                         },
                         (error) => {
                             console.log(error, 'email failed')
                         }
                     )
             }
         }
    return (
        <div className='contact-box'>
            <h3 className='heading-3'>Leave a message</h3>
            {handleSummit && (
                <p
                    className={
                        error ? 'form__displayError' : 'form__displayMessage'
                    }
                >
                    {displayMessage}
                </p>
            )}
            <form className='contact-form' onSubmit={handleForm}>
                <div className='contact-form__item'>
                    <label htmlFor='name'>Your name:</label>
                    <input
                        className='contact-form__input'
                        onChange={inputHandler}
                        type='text'
                        name='user_name'
                        value={name}
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

                <div className='contact-form__item'>
                    <label htmlFor=''>Message:</label>
                    <textarea
                        className='contact-form__input'
                        name='message'
                        onChange={inputHandler}
                        value={message}
                        rows={5}
                    ></textarea>
                </div>
                <button type='submit' className='button contact-form__btn'>
                    send
                </button>
            </form>

            <div className='contact-box__details'>
                <FaMapMarkedAlt />
                <p>Caroline Odu ,Ejigbo Lagos Nigeria.</p>

                <AiFillPhone />
                <p> +2348123669728</p>

                <SiMailDotRu />
                <p> support@teenscanblog.com</p>
            </div>
        </div>
    )
}

export default Form
