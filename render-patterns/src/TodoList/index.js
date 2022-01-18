import React from 'react';
import './TodoList.css'

function TodoList(props) {
  const renderValue = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos) &&  props.onEmpty()}
      {props.searchedTodos.map(renderValue)}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}
    </section>
  );
}

export { TodoList };
