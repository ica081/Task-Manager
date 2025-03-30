// client/src/pages/Tasks.tsx
import { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { Task } from '../types';
import { AddTask, TaskList } from '../components';

export default function Tasks() {
  const { token, api } = useAuth();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (!token) return;
    
    const fetchTasks = async () => {
      try {
        const { data } = await api.get('/tasks');
        setTasks(data);
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };
    
    fetchTasks();
  }, [token, api]);

  const handleAddTask = async (task: Task) => {
    try {
      const { data } = await api.post('/tasks', { title: task.title });
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <div className="cyber-container">
      <h2>Minhas Tarefas</h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}