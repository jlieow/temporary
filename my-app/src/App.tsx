import './App.css';
import { useState } from "react"
import axios, { AxiosResponse } from 'axios';

import { TextArea } from "./components/TextArea";
import { Button } from "./components/Button";

import dotenv from 'dotenv';
dotenv.config()
require('dotenv').config()

function App() {

  const [text, setText] = useState<string>("");

  const url = "http://localhost:8080/aws_bill_csv"
  
  console.log(process.env)
  // const url = process.env.URL || "http://localhost:8080/aws_bill_csv"
  
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
    <div className="App">
        <TextArea 
          value={text} 
          placeholder="After copying and pasting the contents from your AWS bill PDF into the text area, press the button below to convert it to CSV."
          style={{ height: "500px", width: "500px" }}
          handleChange={event => setText(event.target.value)} 
        />
        <Button 
          buttonText="Convert AWS Bill to CSV"
          style={{ width: "500px" }}
          handleClick={handleClick}
        />
    </div>
  );
}

export default App;
