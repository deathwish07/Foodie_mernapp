
import './App.css';
import Home from './screens/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/createuser" element = {<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
