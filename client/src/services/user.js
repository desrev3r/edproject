import axios from 'axios';
import authenticationService from './authentication';

const getCurrentProfile = async () => {
  try {
    const token = authenticationService.currentUser().token;
    const currentProfile = await axios.get('/api/profile/me', {
      headers: { 'x-auth-token': token },
    });
    return currentProfile;
  } catch (err) {
    console.log(err.response.data);
  }
};

const getAllProfiles = async () => {
  try {
    const profilesList = await axios.get('/api/profile');
    return profilesList;
  } catch (err) {
    console.log(err.response.data);
  }
};

const getProfileByID = async (id) => {
  try {
    const profile = await axios.get(`/api/profile/${id}`);
    return profile;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const userService = {
  getProfileByID,
  getCurrentProfile,
  getAllProfiles,
};
