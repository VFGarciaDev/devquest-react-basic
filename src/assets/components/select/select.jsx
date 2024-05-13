import React from "react";
import "./select.css"

const Select = ({handleSelectEvent, valueToReset}) => {
    return (
        <select className="slct" onChange={handleSelectEvent} value={valueToReset}>
            <option value="none">Default</option>
            <option value="capitalize">Capitalize</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
        </select>
    )
}

export default Select