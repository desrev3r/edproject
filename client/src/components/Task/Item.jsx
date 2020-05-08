import React from 'react';
import FadeIn from 'react-fade-in';
import { TaskCard } from '../generic/TaskCard';

export const TaskItem = ({ title, topic, subtopic }) => {
  return (
    <FadeIn>
      <TaskCard title={title} topic={topic} subtopic={subtopic} />
    </FadeIn>
  );
};
