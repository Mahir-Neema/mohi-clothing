import React from 'react';
import './App.css';

// import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
// import { Router } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';
import { auth } from './firebase/firebase.utils';


import {withRouter} from 'react-router';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        {/* <BrowserRouter forceRefresh={true} /> */}


        <Switch>
          {/* <Route exact strict path='/' component={withRouter(HomePage)} /> */}
          <Route exact path='/shop' component={withRouter(ShopPage)} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/' component={withRouter(HomePage)} />
        </Switch>
  
        {/* <HomePage/> */}
      </div>
    );
  }
}

export default App;
