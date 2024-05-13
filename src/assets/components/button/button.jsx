import React from "react";
import "./button.css"

const Button = ({handleButtonClick, label}) => {
    return(
        <button
        type="button"
        className="btn"
        onClick={handleButtonClick}>
        {label}</button>
    )
}

export default Button