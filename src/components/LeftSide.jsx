import { useState } from "react";

const LeftSide = ({
  header,
  para,
  liOne,
  liTwo,
  liThree,
  label,
  errorLabel,
  btnName,
  email,
  handleEmailChange,
  handleSubmit,
}) => {
  // Check if the email is invalid
  const isEmailInvalid = email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event); // Call the parent component's handleSubmit function
  };

  return (
    <div className="left-side">
      <div className="text-content">
        <h1>{header}</h1>
        <p>{para}</p>
        <ul>
          <li>{liOne}</li>
          <li>{liTwo}</li>
          <li>{liThree}</li>
        </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="my-labels">
          <label htmlFor="email-input">{label}</label>
          <label
            className={isEmailInvalid ? "error-label hidden" : "error-label"}
          >
            {errorLabel}
          </label>
        </div>
        <input
          type="email"
          placeholder="email@company.com"
          value={email}
          onChange={handleEmailChange}
          required
          className={isEmailInvalid ? "error-input" : ""} // Add 'invalid' class if email is invalid
          pattern="^[^\s@]+@[^\s@]+\.[a-z]{2,}$"
        />
        <button type="submit" className="sub-btn">
          {btnName}
        </button>
      </form>
    </div>
  );
};

export default LeftSide;
