import React from "react";

const LeftSide = (props) => {
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
          <form action="submit">
            <div className='my-labels'>           
              <label>{props.label}</label>
              <label className='error-label'>{props.errorLabel}</label>
            </div>            
            <input type="email" placeholder='email@company.com'/>
            <button className='sub-btn'>{props.btnName}</button>
          </form>
        </div>
    )
}

export default LeftSide;