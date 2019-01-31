import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
      <div 
        style={{ width: 1200, clear: "both", paddingTop: 50, margin: 20 ,textAlign: "center"}}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }

export default Jumbotron;