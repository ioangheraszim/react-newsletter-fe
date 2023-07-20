import React from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";


const FormSign = () => {
    return (
        <div className='form-sign'>
            <LeftSide 
                header="Stay updated!"
                para="Join 60,000+ product managers receiving monthly updates on:"
                liOne="Product discovery and building what matters"
                liTwo="Measuring to ensure updates are a success"
                liThree="And much more!"
                label="Email Adress"
                errorLabel="Valid Email Rquired"
                btnName="Subscribe to montlhy newsletter"
            />
            <RightSide />
        </div>
    )
}

export default FormSign;

