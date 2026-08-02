import React from 'react'
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button } from "@/components/ui/button"


//api function to cretae
async function createTodo(task) {
  const response = await fetch('http://localhost:5000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error('Failed to create task');
    return response.json();
  }
}

const Task = () => {

    const[task, setTask] =useState('');

    const mutation = useMutation({
        mutationFn: createTodo,
        onSuccess: (data) => {
        //   setTask('');
       queryClient.invalidateQueries({ queryKey: ['Tasks'] }); // Invalidate the query to refetch tasks
        }
      });

const handleAddTask = () => {
    mutation.mutate({ title: task, completed: false });
  } 

  return (
    <div>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}> add Task </button>
      <Button variant="outline">Button</Button>
    </div>
  )
}

export default Task
