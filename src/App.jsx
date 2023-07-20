import { useState } from 'react'

function App() {

  return (
    <div className='container'>
      <div className='form-sign'>
        <div className='left-side'>
          <div className='text-content'>
            <h1>Stay updated!</h1>
            <p> Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
          </div>          
          <form action="submit">
            <div className='my-labels'>           
              <label>Email Adress</label>
              <label className='error-label'>Valid Email Rquired</label>
            </div>            
            <input type="email" placeholder='email@company.com'/>
            <button className='sub-btn'>Subscribe to montlhy newsletter</button>
          </form>
        </div>
        <div className='right-side'>
          <img className='desktop-illustration' src="./src/assets/images/illustration-sign-up-desktop.svg" alt="desktop illustration" />
          <img className='mobile-illustration' src="./src/assets/images/illustration-sign-up-mobile.svg" alt="mobile illustration" />
        </div>
      </div>
      <div className='form-success'>
        <div className='text-components'>
          <img src="./src/assets/images/icon-success.svg" alt="" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
        </div>
        
        <button>Dismiss message</button>
      </div>
      
    </div>
  )
}

export default App
