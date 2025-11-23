import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const FormSign = ({ email, handleEmailChange, handleSubmit }) => {
  return (
    <div className="form-sign">
      <LeftSide
        header="Stay updated!"
        para="Join 60,000+ product managers receiving monthly updates on:"
        liOne="Product discovery and building what matters"
        liTwo="Measuring to ensure updates are a success"
        liThree="And much more!"
        label="Email Address"
        errorLabel="Valid Email Required"
        btnName="Subscribe to monthly newsletter"
        email={email}
        handleEmailChange={handleEmailChange}
        handleSubmit={handleSubmit}
      />
      <RightSide />
    </div>
  );
};

export default FormSign;
