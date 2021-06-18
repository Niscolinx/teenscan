// const Checkout = (props: any) => {
//     console.log('checkout props', props.location.state)
//     const { title, price } = props.location.state

//     const formattedPrice = price.toLocaleString()

//     return (
//         <div className='checkout'>
//             <h3 className='checkout__header'>Checkout</h3>

//             <select className='checkout__select'>
//                 <option value='localPay'>Local Deposit</option>
//                 <option value='Paystack'>Card Payment</option>
//             </select>

//             <div className='checkout__paymentType'>
//                 <h4>Account Details</h4>

//                 <div className='checkout__paymentType--items'>
//                     <div>
//                         <span>Bank Name:</span>
//                         <p className='checkout__paymentType--item'>
//                             Gurantee Trust Bank
//                         </p>
//                     </div>
//                     <div>
//                         <span>Account Name:</span>
//                         <p className='checkout__paymentType--item'>
//                             Teens Can Blog Tech Comm.
//                         </p>
//                     </div>
//                     <div>
//                         <span>Account Number:</span>
//                         <p className='checkout__paymentType--item'>
//                             0632650272
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className='checkout__details'>
//                 <h4>Summary</h4>

//                 <div className='checkout__details--items'>
//                     <div>
//                         <span>Course:</span>
//                         <p className='checkout__details--item'>{title}</p>
//                     </div>
//                     <div>
//                         <span>Price:</span>
//                         <p className='checkout__details--item'>
//                             ₦{formattedPrice}{' '}
//                         </p>
//                     </div>
//                 </div>

//                 <button className='button checkout__btn'>
//                     Complete Payment
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Checkout


  import { usePaystackPayment } from 'react-paystack'

  const config = {
      reference: new Date().getTime(),
      email: 'user@example.com',
      amount: 20000,
      publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  }

  // you can call this function anything
  const onSuccess = (reference:any) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference)
  }

  // you can call this function anything
  const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config)
      return (
          <div>
              <button
                  onClick={() => {
                      initializePayment(onSuccess, onClose)
                  }}
              >
                  Paystack Hooks Implementation
              </button>
          </div>
      )
  }

  function App() {
      return (
          <div className='App'>
              <header className='App-header'>
                  <img src={logo} className='App-logo' alt='logo' />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className='App-link'
                      href='https://reactjs.org'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                      Learn React
                  </a>
              </header>
              <PaystackHookExample />
          </div>
      )
  }

  export default App
