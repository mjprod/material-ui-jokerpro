import React from "react";
import PropTypes from "prop-types";
import "./ButtonCTA.css";

interface ButtonCTAProps {
  text: string;
  URL: string | (() => void);
  icon?: React.ReactElement;
  iconType?: string;
}

const ButtonCTA: React.FC<ButtonCTAProps> = ({
  text,
  URL,
  icon = (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Button Icon"
    >
      <path
        d="M12.4999 1.05C12.4999 0.784784 12.3946 0.530429 12.207 0.342893C12.0195 0.155357 11.7652 0.0500002 11.4999 0.0500002L3.49994 0C3.23472 0 2.98037 0.105357 2.79283 0.292893C2.6053 0.48043 2.49994 0.734784 2.49994 1C2.49994 1.26522 2.6053 1.51957 2.79283 1.70711C2.98037 1.89464 3.23472 2 3.49994 2H9.05994L0.789939 10.29C0.696211 10.383 0.621816 10.4936 0.571048 10.6154C0.520279 10.7373 0.494141 10.868 0.494141 11C0.494141 11.132 0.520279 11.2627 0.571048 11.3846C0.621816 11.5064 0.696211 11.617 0.789939 11.71C0.882902 11.8037 0.993503 11.8781 1.11536 11.9289C1.23722 11.9797 1.36793 12.0058 1.49994 12.0058C1.63195 12.0058 1.76266 11.9797 1.88452 11.9289C2.00638 11.8781 2.11698 11.8037 2.20994 11.71L10.4999 3.42V9C10.4999 9.26522 10.6053 9.51957 10.7928 9.70711C10.9804 9.89464 11.2347 10 11.4999 10C11.7652 10 12.0195 9.89464 12.207 9.70711C12.3946 9.51957 12.4999 9.26522 12.4999 9V1.05Z"
        fill="white"
      />
    </svg>
  ),
  iconType,
}) => {
  const handleClick = () => {
    if (typeof URL === "string") {
      window.location.href = URL;
    } else if (typeof URL === "function") {
      URL();
    }
  };

  return (
    <div className="buttonCTA animatedBorder">
      <button className="innerCTABg" onClick={handleClick}>
        <div className="buttonCTAContainer">
          <div className="buttonCTAIcon">{icon}</div>
          <div className="buttonCTAfont">{text}</div>
        </div>
      </button>
    </div>
  );
};

// PropTypes for runtime validation (Optional for TypeScript)
ButtonCTA.propTypes = {
  text: PropTypes.string.isRequired,
  URL: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  icon: PropTypes.element,
};

export default ButtonCTA;
