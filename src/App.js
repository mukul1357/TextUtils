// import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, {useState} from 'react'
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)
  const showAlert = (type, message) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleTheme = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(17, 38, 60)';
      showAlert("success", "Dark mode is enabled")
    }
    else if(mode === 'dark')
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Dark mode is disabled")
    }
  }
  return (<>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleTheme={toggleTheme}/>
      <Alert alert ={alert}/>
      <div className='container my-3'>
        <TextForm title='Enter your text below:' mode={mode} showAlert={showAlert}/> 
          {/* <About/> */}
          {/* <Routes> */}
            {/* <Route path="/about" element={<About/>}> */}
            {/* </Route> */}
            {/* <Route path="/" element={<TextForm />}> */}
            {/* </Route> */}
          {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
