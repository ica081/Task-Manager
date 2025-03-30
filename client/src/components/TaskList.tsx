import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <input 
            type="checkbox" 
            checked={task.completed}
            readOnly
          />
          <span>{task.title}</span>
        </li>
      ))}
    </ul>
  );
}