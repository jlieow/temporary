import React, { useState } from "react"
import axios, { AxiosResponse } from 'axios';

export const Input = () => {


    const [text, setText] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const url = "http://localhost:8080/aws_bill_csv"
    const bodyFormData = new FormData()
    bodyFormData.append("text_data", text)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(text)
        axios.post(url, bodyFormData).then((response: AxiosResponse) => {
            
            console.log(response.data)

            const url = window.URL.createObjectURL(new Blob([response.data])) 
            const link = document.createElement('a')
            link.href = url
            const fileName = `awsbill.csv`;
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click()
            link.remove()
        })
    }

    return (
        <div>
            <textarea style={{ height: "500px", width: "500px" }} value={text} onChange={handleInputChange}/>
            <button onClick={handleClick}>Convert to CSV</button>
        </div>
    )
}