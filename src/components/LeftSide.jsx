import React from "react";

const LeftSide = (props) => {
  const { email, handleEmailChange, handleSubmit } = props;

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
      <form onSubmit={handleSubmit}>
        <div className='my-labels'>           
          <label>{props.label}</label>
          <label className='error-label'>{props.errorLabel}</label>
        </div>            
        <input 
          type="email" 
          placeholder='email@company.com'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className='sub-btn'>{props.btnName}</button>
      </form>
    </div>
  );
};

export default LeftSide;