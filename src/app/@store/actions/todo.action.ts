let nextTodoId = 1;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const clearCompletedTodo = () => {
  return {
    type: 'CLEAR_COMPLETED_TODO'
  }
}

export const toggleAllTodo = () => {
  return {
    type: 'TOGGLE_ALL_TODO'
  }
}