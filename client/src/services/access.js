export const isAuthorized = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (user !== null && user.hasOwnProperty('token')) {
    return true;
  } else {
    return false;
  }
};

export const isAdmin = () => {
  if (isAuthorized()) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user.isAdmin) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};
