/* eslint-disable no-use-before-define */
import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import loginVector from '../../images/Vectors.png';

function Login() {
  return (
    <main>
      <div className="title">
        <h1>Sign In</h1>
      </div>
      <form>
        <input className="input-text" placeholder="Login" type="text" />
        <input className="input-text" placeholder="Password" type="password" />
        <div className="container">
          <label htmlFor="remember-checkbox">
            <input className="checkbox" id="remember-checkbox" name="remember-checkbox" type="checkbox" />
            Remember me
          </label>
          <Link to="/">Forgot Password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
      <img src={loginVector} alt="vector" />
    </main>
  );
}

export default Login;
