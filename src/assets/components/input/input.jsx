import React from "react";
import "./input.css"

const Input = ({handleChangeEvent, valueToReset, placeholderText}) => {
    return(
        <input
        type="text"
        className="ipt"
        placeholder={placeholderText}
        value={valueToReset}
        onChange={handleChangeEvent} />
    )
}

export default Input