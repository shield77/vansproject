import React from "react";
import "./Overlay.css";

const Overlay = ({ onClose, darkBackground }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div className={`overlay ${darkBackground ? "dark-background" : ""}`} onClick={handleClick}></div>
  );
};

export default Overlay;
