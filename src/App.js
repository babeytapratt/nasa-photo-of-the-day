import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from './constants/index'
import "./App.css";
import Image from './image'
import axios from 'axios'


function App() {

  // const { camera, close } = props
  const [imageData, setImageData] = useState('')

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
        setImageData(res.data)})
    .catch(err => {

    })
    console.log(imageData)
  },)
  console.log(imageData)

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <Image/>
    </div>
  );

}

export default App;
