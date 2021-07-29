type User = {
  accountId: String,
  accessToken: String,
  refreshToken: String,
}
function saveUserOnLocalStorage(user: User) {
  localStorage.setItem('user', JSON.stringify(user));
}

export default saveUserOnLocalStorage;
