import React from 'react';
import './App.css';

// import { Routes, Route } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";


import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </BrowserRouter> */}


      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

      {/* <HomePage/> */}
    </div>
  );
}

export default App;
