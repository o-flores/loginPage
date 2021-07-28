/* eslint-disable no-use-before-define */
import React, { useState, FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';
import '../login/login.scss';
import loginVector from '../../images/Vectors.png';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append('accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    // fetch('http://https://fdr-authmanager.herokuapp.com/api/v1/accounts', requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log('error', error));
    const data = await fetch('http://https://fdr-authmanager.herokuapp.com/api/v1/accounts', requestOptions);
    console.log(data);
    // history.push('/');
  }

  function verifyForm() {
    if ((email && name && password)) {
      if ((email.includes('@') && email.includes('.com'))) return false;
    }
    return true;
  }

  return (
    <main>
      <div className="title">
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input-text"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input-text"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="submit"
          disabled={verifyForm()}
        >
          Create
        </button>
      </form>
      <img src={loginVector} alt="vector" />
    </main>
  );
}

export default Create;