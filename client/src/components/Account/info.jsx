import React from 'react';
import { userService } from '../../services/user';

export const AccountInfo = () => {
  const user = userService.getCurrentUser();
  console.log(user);
  return (
    <div>
      ID: {user.id}<br/>
      Права: {user.isAdmin ? 'Администратор' : 'Студент'}
    </div>
  );
};
