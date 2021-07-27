/* eslint-disable no-use-before-define */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import loginVector from '../../images/Vectors.png';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(login);
    console.log(password);
  }
  return (
    <main>
      <div className="title">
        <h1>Sign In</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          placeholder="Login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          className="input-text"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="container">
          <label htmlFor="remember-checkbox">
            <input className="checkbox" id="remember-checkbox" name="remember-checkbox" type="checkbox" />
            Remember me
          </label>
          <Link to="/">Forgot Password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New Here?
        <Link
          to="/create/account"
        >
          Register
        </Link>
      </p>
      <img src={loginVector} alt="vector" />
    </main>
  );
}

export default Login;
