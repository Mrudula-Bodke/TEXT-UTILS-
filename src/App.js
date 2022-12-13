import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// let name = "Mrudula";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Textutils-Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Textutils-Light Mode";
    }
  }
  return (
    <>
      <Router>

        <Navbar title="Textutils" about="Aboutus" mode={mode} togglemode={togglemode}></Navbar>
        {/* <Navbar  about="Aboutus"></Navbar> here defaultProps will get passed as title is not set therefore default value of title will het displayed(Refer Navbar.js)   */}
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
          
        </div>
      </Router>
    </>
  );
}

export default App;
