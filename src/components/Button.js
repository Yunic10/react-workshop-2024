import React from "react";

export function Button({className, type = "button", label, onClick, disabled = false}){
    return (
        <button
              className = {`${className} font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type={type}
              disabled={disabled}
              onClick={disabled ? undefined : onClick}
            >
              {label}
        </button>
    )
}