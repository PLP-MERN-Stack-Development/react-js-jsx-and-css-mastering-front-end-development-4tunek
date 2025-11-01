import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center py-4">
        No tasks found
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
