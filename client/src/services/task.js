import axios from 'axios';

const getAllTasks = async (id) => {
  try {
    const taskList = await axios.get(`/api/tasks`);
    return taskList;
  } catch (err) {
    return err;
  }
};

const getTaskById = async (id) => {
  try {
    const task = await axios.get(`/api/tasks/${id}`);
    return task;
  } catch (err) {
    return err;
  }
};

export const taskService = {
  getAllTasks,
  getTaskById
};
