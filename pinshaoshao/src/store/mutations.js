export default {
  changCount (state) {
     state.count ++ 
  }, 
  addItemToTodos (state) {
    state.todos.push ({id: 3, done: false, title: '测试mapMutations'})
  } 
}