import axios from 'axios';

const login = async (email, password) => {
  try {
    const user = await axios.post('/api/auth', {
    email,
    password,
  });

  const { token, id, isAdmin } = user.data;
  localStorage.setItem('currentUser', JSON.stringify({ id, token, isAdmin }));
  } catch (err) {
    return err.response.data;
  }
  
};

const currentUser = localStorage.getItem('currentUser');

const logout = () => {
  localStorage.removeItem('currentUser');
};

export const authenticationService = {
  login,
  logout,
  currentUser,
};
