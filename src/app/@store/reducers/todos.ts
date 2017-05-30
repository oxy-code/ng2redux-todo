export interface ITodoState{
  id: number,
  text: string,
  completed: boolean
};

export const INIT_TODO: ITodoState = {
  id: 0, text:'', completed: false
};

const todo = (state: ITodoState = INIT_TODO, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

export const todos = (state:ITodoState[] = [], action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      return state.filter(t => {return t.id !== action.id})
    case 'CLEAR_COMPLETED_TODO':
      return state.filter(t => {return t.completed !== true})
    default:
      return state
  }
}