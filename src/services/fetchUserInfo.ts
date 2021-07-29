async function fetchUserInfo(token: String, id: String) {
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  try {
    const response = await fetch(`http://fdr-authmanager.herokuapp.com/api/v1/accounts/${id}`, requestOptions);
    const data = await response.json();
    const userInfo = {
      id: data.account_id,
      email: data.email,
    };
    return userInfo;
  } catch (error) {
    return error;
  }
}

export default fetchUserInfo;
