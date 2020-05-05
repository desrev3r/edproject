const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const userService = {
  getCurrentUser,
};
