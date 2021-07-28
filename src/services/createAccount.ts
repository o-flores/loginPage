async function createAccount(email: String, password: String, setLoading: Function) {
  setLoading(true);
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
    await fetch('https://fdr-authmanager.herokuapp.com/api/v1/accounts', requestOptions);
  } catch (error) {
    console.log(error);
  }
  // teste@hotmail.com
  // 123
  setLoading(false);
}

export default createAccount;
