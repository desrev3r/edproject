import React from 'react';
import { authenticationService } from '../../services/authentication';

export const AccountInfo = () => {
  const user = authenticationService.currentUser();
  return (
    <div>
      ID: {user.id}
      <br />
      Права: {user.isAdmin ? 'Администратор' : 'Студент'}
    </div>
  );
};
