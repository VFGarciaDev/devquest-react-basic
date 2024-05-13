import React from "react";
import "./output.css"

const Output = ({children, customColor, customTextDecor}) => {
    return(
            <p
            className="opt"
            style={{
                color: `${customColor}`,
                textTransform: `${customTextDecor}`}}>
            {children}</p>
    )
}

export default Output