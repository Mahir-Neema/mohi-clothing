import React from 'react';
import './App.css';

// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter> */}


      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

      {/* <HomePage/> */}
    </div>
  );
}

export default App;
