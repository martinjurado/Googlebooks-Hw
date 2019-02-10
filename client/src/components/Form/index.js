import React from "react";
import "./style.css";

export function InputDiv (props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} 
            placeholder="Search for a book" 
            size="60"/>
        </div>
    );
}

export function FormBtn({ onClick, children }) {
    return (
      <button onClick={onClick}  style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {children}
      </button>
    );
}
