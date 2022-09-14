import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import Gallery from './components/Gallery'
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleDark = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212530';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <Router>
      <Navbar title='App' mode={mode} toggleDark={toggleDark} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Home showAlert={showAlert} mode={mode} />} />
        <Route path="/gallery" element={<Gallery mode={mode}/>} />
      </Routes>
    </Router>
  );
}

export default App;
