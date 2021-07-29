async function userLogin(email: String, password: String) {
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

  try {
    const data = await fetch('http://fdr-authmanager.herokuapp.com/api/v1/accounts/login', requestOptions);
    return data;
  } catch (error) {
    return error;
  }
}

export default userLogin;
