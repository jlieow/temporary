import React from "react"

type ButtonProps = {
    buttonText: String
    style: {}
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
} 

export const Button = (props: ButtonProps) => {
    return (
        <button 
            style={props.style} 
            onClick={event => props.handleClick(event)}
        >
            {props.buttonText}
        </button>
    )
}