/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import Login from './Login';
import Subheader from './Subheader';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Subfooter from './Subfooter';
import Footer from './Footer';
import Orders from "./Orders";
import Nav from "./Nav";

const promise = loadStripe("pk_test_51HPvTpGbLJvrUfHGNUVEXk62kFqpf4P6RrkqQ7yYgeX22u1GCatnutFoLOwAMQKKXjYKa6EJvD6TasmCTT3ke2nT00HXiPYCnS");




function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
              <Header/>
              <Subheader />
            <Checkout />
            <Subfooter />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Subfooter />
            <Footer />
          </Route>
          <Route path="/">
              <Header />
              <Subheader />
            <Home />
            <Subfooter />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
