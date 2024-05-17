import React from "react"

type TextAreaProps = {
    value: string
    placeholder: string
    style: {}
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
} 

export const TextArea = (props: TextAreaProps) => {

    return (
        <div>
            <textarea 
                value={props.value} 
                placeholder={props.placeholder}
                style={props.style}
                onChange={props.handleChange}
            />
        </div>
    )
}