import axios from 'axios';

const login = async ({email, password}) => {
  try { 
    const user = await axios.post('/api/auth', {
    email,
    password,
  });

  console.log('Authorised!');

  const { token, id, isAdmin } = user.data;
  localStorage.removeItem('currentUser');
  localStorage.setItem('currentUser', JSON.stringify({ id, token, isAdmin }));
  } catch (err) {
    return err.response.data;
  }
  
};

const currentUser = localStorage.getItem('currentUser');

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
