import desktopIllustration from "../../public/images/illustration-sign-up-desktop.svg";
import mobileIllustration from "../../public/images/illustration-sign-up-mobile.svg";
const RightSide = () => {
  return (
    <div className="right-side">
      <img
        className="desktop-illustration"
        src={desktopIllustration}
        alt="desktop illustration"
      />
      <img
        className="mobile-illustration"
        src={mobileIllustration}
        alt="mobile illustration"
      />
    </div>
  );
};

export default RightSide;
