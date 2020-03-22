const state = {
  todos: localStorage.todos ? JSON.parse(localStorage.todos) : []
};

const getters = {
  allTodos: state => state.todos,
  doneTodos: state => state.todos.filter(todo => todo.done),
  activeTodos: state => state.todos.filter(todo => !todo.done)
};

const mutations = {
  ADD_TODO: (state, todo) => {
    state.todos = [...state.todos, todo];
  },
  EDIT_TODO: (state, todoData) => {
    state.todos = state.todos.map((todo) => {
      if(todo.index !== todoData.index) return todo;
      return todoData;
    });
  },
  DELETE_TODO: (state, todoIndex) => {
    state.todos = state.todos.filter((todo) => todo.index !== todoIndex);
  },
  ORDER_TODOS: (state) => {
    state.todos = state.todos.map((todo, index) => {
      todo.index = index;
      return todo;
    });
  },
  SAVE_TODOS: (state) => {
    localStorage.todos = JSON.stringify(state.todos);
  }
};

const actions = {
  saveNewTodo: (context, todo) => new Promise ((resolve) => {
    todo.index = context.state.todos.length || 0;
    context.commit('ADD_TODO', todo);
    context.commit('ORDER_TODOS');
    context.commit('SAVE_TODOS');
    resolve();
  }),
  saveEditTodo: (context, todoData) => new Promise ((resolve) => {
    context.commit('EDIT_TODO', todoData);
    context.commit('SAVE_TODOS');
    resolve();
  }),
  deleteTodo: (context, todoIndex) => new Promise ((resolve) => {
    context.commit('DELETE_TODO', todoIndex);
    context.commit('ORDER_TODOS');
    context.commit('SAVE_TODOS');
    resolve();
  })
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}