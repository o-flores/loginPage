/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.scss';
import loginVector from '../../images/Vectors.png';
import userLogin from '../../services/userLogin';
import saveUserOnLocalStorage from '../../services/saveUser';
import fetchUserInfo from '../../services/fetchUserInfo';
import { useAuth } from '../../contexts/auth';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useAuth();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await userLogin(login, password);
    const data = await response.json();
    if (data.errors) alert(`${data.errors.description}`);
    if (data.account_id) {
      saveUserOnLocalStorage(data);
      const user = await fetchUserInfo(data.access_token, data.account_id);
      setUser(user);
      history.push('/dashboard');
    }
  }

  function verifyForm() {
    if (login && password) return false;
    return true;
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
        <button
          type="submit"
          disabled={verifyForm()}
        >
          Login
        </button>
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
