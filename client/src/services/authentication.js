import axios from 'axios';

const login = async ({ email, password }) => {
  try {
    const user = await axios.post('/api/auth', {
      email,
      password,
    });

    const { token, id, isAdmin } = user.data;
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', JSON.stringify({ id, token, isAdmin }));
    return true;
  } catch (err) {
    return err.response.data;
  }
};

const currentUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user !== null && user.hasOwnProperty('token')) {
    return user;
  } else {
    return null;
  }
};

const logout = () => {
  localStorage.clear();
  const isUserLoggedOut = localStorage.getItem('currentUser') === null;

  if (isUserLoggedOut) {
    return true;
  }
};

const signup = async ({ name, email, password }) => {
  try {
    await axios.post('/api/users', {
      name,
      email,
      password,
    });
    login(email, password);
  } catch (err) {
    return err.response.data;
  }
};

const isLogin = () => {
  const loggedUser = currentUser();
  if (
    loggedUser !== null &&
    loggedUser !== undefined &&
    loggedUser.hasOwnProperty('token')
  ) {
    return true;
  }
  return false;
};

const authenticationService = {
  login,
  logout,
  signup,
  currentUser,
  isLogin,
};

export default authenticationService;
