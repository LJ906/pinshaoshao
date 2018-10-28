export default {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done).length
  }, 
  // ... getter 函数传参 调用的时候
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }

}