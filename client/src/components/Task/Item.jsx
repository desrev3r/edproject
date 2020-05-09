import React from 'react';
import FadeIn from 'react-fade-in';
import { TaskCard } from '../generic/Task/Card';

export const TaskItem = ({ id, title, topic, subtopic }) => {
  return (
    <FadeIn>
      <TaskCard id={id} title={title} topic={topic} subtopic={subtopic} />
    </FadeIn>
  );
};
