import React from "react";

const FormSuccess = ({ email, handleDismiss }) => {
  return (
    <div className='form-success'>
      <div className='text-components'>
        <img src="./react-newsletter-fe/images/icon-success.svg" alt="success icons" />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <button onClick={handleDismiss}>Dismiss message</button>
    </div>
  );
};

export default FormSuccess;