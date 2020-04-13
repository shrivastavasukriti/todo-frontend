import { createSelector } from 'reselect'

const getVisibileTask = state => state.visibleTasks
const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  [getVisibileTask, getTodos],
  (visibleTasks, todos) => {
    switch (visibleTasks) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)