
import './App.css';
import './components/Navbar.js'
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
 import React,{ useState } from 'react';
import Alert from './components/Alert';
import { withRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() =>{
    setAlert(null);
  },1500)
} 
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#35233e';
      showAlert("Dark mode has been enabled","success");
    }
    else{
       setMode('light');
       document.body.style.backgroundColor ='white';
       showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about" component={withRouter(About)}>
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;
