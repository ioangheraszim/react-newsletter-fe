import React, { useState } from "react";

const LeftSide = (props) => {
  const { email, handleEmailChange, handleSubmit } = props;
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Check if the email is invalid
  const isEmailInvalid = email && !email.includes('@'); 
  
  const handleFormSubmit = (event) => {
      event.preventDefault();
      setIsSubmitted(true); // Set isSubmitted to true when the form is submitted
      handleSubmit(event); // Call the parent component's handleSubmit function
  };
  return (
    <div className='left-side'>
      <div className='text-content'>
        <h1>{props.header}</h1>
        <p>{props.para}</p>
        <ul>
          <li>{props.liOne}</li>
          <li>{props.liTwo}</li>
          <li>{props.liThree}</li>
        </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className='my-labels'>           
          <label>{props.label}</label>
          <label className={isEmailInvalid ? 'error-label hidden' : 'error-label'}> {props.errorLabel}</label>
        </div>            
        <input 
          type="email" 
          placeholder='email@company.com'
          value={email}
          onChange={handleEmailChange}
          required
          className={isEmailInvalid ? 'error-input' : ''} // Add 'invalid' class if email is invalid
        />
        <button type="submit" className='sub-btn'>{props.btnName}</button>
      </form>
    </div>
  );
};

export default LeftSide;