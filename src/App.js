import React from 'react';
import './App.css';
import Signin from './compoents/signin';
import Signup from './compoents/signup';
import Header from './compoents/header';
import Body from './compoents/body';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Body />
      {/* <Router>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Header />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;