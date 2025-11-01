import React from 'react';
import Button from './Button';

const TaskItem = ({ task, toggleTask, deleteTask }) => (
  <li className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
      />
      <span
        className={`${
          task.completed
            ? 'line-through text-gray-500 dark:text-gray-400'
            : ''
        }`}
      >
        {task.text}
      </span>
    </div>
    <Button
      variant="danger"
      size="sm"
      onClick={() => deleteTask(task.id)}
      aria-label="Delete task"
    >
      Delete
    </Button>
  </li>
);

export default TaskItem;
