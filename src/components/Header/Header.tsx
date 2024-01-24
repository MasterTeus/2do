import React from "react";

import Logo2Dou from "../../assets/logo.svg";
import "./styles.css";
export const Header: React.FC = () => {
  return (
    <div className="backgroundHeader">
      <img src={Logo2Dou} />

      <input className="input" />
    </div>
  );
};
