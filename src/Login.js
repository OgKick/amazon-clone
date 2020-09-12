import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
      e.preventDefault();

      auth
          .signInWithEmailAndPassword(email, password)
          .then(auth => {
              history.push('/')
          })
          .catch(error => alert(error.message))
  }

  const register = e => {
      e.preventDefault();

      auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
              // it successfully created a new user with email and password
              if (auth) {
                  history.push('/')
              }
          })
          .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
    <Link to='/'>
      <img src='https://upload.wikimnedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg.png'/>
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
            <input type='text' valu={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type="submit" onClick={signIn} className="login_signInButton">Sign in</button>
        </form>

        <p>By signing.in you agree to the AMAZON FAKE CLONE Condtions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

        <button type="submit" onClick={register} className="login__RegisterButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
