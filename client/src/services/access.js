import authenticationService from './authentication';

const isAdmin = () => {
  if (authenticationService.isLogin) {
    const user = authenticationService.currentUser();
    if (user !== null && user !== undefined) {
      return user.isAdmin;
    }
  }
};

const accessService = {
  isAdmin,
};

export default accessService;
