import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.componenet'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

import { auth , createUserProfileDocument} from './firebase/firebase.utils';

import { connect } from "react-redux";

import {setCurrentUser} from './redux/user/user.actions'


class App extends React.Component {
 
  
  const {setCurrentUser} = this.props;

  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(SnapShot => {

          setCurrentUser({
              id:SnapShot.id,
              ...SnapShot.data()
          });

        });        

      }
        setCurrentUser(userAuth)


      //createUserProfileDocument(userAuth)
      console.log("User status changed ....");
      console.log(userAuth);
    });
  }

  componentWillUnmount(){

    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps) (App);
