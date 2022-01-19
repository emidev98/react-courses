import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
  
  return (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>You have completed {completedTodos} out of {totalTodos} items from your list</h2>
  );
}

export { TodoCounter };
