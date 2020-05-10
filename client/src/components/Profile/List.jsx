import React, { Fragment, useState, useEffect } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

import { userService } from '../../services/user';
import { TaskItem } from '../Task/Item';

import { FlexBlock } from '../layout/FlexBlock';
import { Block } from '../layout/Block';
import { Button } from '../generic/Button';

const ProfileList = ({ user }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const profileList = userService.getAllProfiles().then((list) => {
      setProfiles(...profiles, list.data);
    });
  }, 0);

  return (
    <Fragment>
      <FlexBlock justify="space-between">
        <h3>Всего: {profiles.length} студентов</h3>
        <Block>
          <Button type="disabled" url="">
            <AiOutlineDownload />
            Скачать результаты
          </Button>
        </Block>
      </FlexBlock>

      {profiles.map(({ user, experience }, idx) => (
        <TaskItem
          key={idx}
          title={user.name}
          topic={experience.tasks.length}
          subtopic={experience.tasks.length}
        />
      ))}
    </Fragment>
  );
};

export default ProfileList;
