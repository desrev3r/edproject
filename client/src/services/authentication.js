import axios from 'axios';

const login = async ({email, password}) => {
  try { 
    const user = await axios.post('/api/auth', {
    email,
    password,
  });

  console.log('Authorized!');

  const { token, id, isAdmin } = user.data;
  localStorage.removeItem('currentUser');
  localStorage.setItem('currentUser', JSON.stringify({ id, token, isAdmin }));
  } catch (err) {
    return err.response.data;
  }
  
};

const currentUser = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user !== null && user.hasOwnProperty('token')) {
    return user
  } else {
    return {id: '***********', isAdmin: false}
  }
}

const logout = () => {
  localStorage.removeItem('currentUser');
};

const signup = async ({name, email, password}) => {
  try {
    const newUser = await axios.post('/api/users', {
      name,
      email,
      password
    });
    login(email, password);
  } catch (err) {
    return err.response.data;
  }
}

export const authenticationService = {
  login,
  logout,
  signup,
  currentUser,
};
