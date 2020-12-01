import React, {useState, useEffect} from "react";
import "./App.css"
import axios from 'axios'
import CreateAPOD from './createAPOD'

function App() {
  const [ date, setDate ] = useState('')
  const [ data, setData ] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=O2nNqicMMW7DTS1PJl6bcVAVxgapiDutk34wwQO3&date=${date}`)
    .then((apod) =>{
      setData(apod.data)
    })
    .catch((err) => {
      console.log('Invalid Date, error: ', err)
      setDate('1999-03-18')
      alert('Invalid date given, try again')
    })
  }, [date])
  return (
    <div className="App">
      <CreateAPOD data={ data }  setDate={setDate} />
    </div>
  );
}

export default App;
