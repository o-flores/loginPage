function getUserInfoFromStorage() {
  const userStoraged = JSON.parse(localStorage.getItem('user'));
  return userStoraged;
}

export default getUserInfoFromStorage;
