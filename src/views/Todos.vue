<template>
  <div id="todos">
    <p class="repo-link"><a class="link" href="https://github.com/kechuv/TodoApp" target="_blank">Repo @ Github</a></p>
    <div class="new-container">
      <TodoForm
      :id="'new'"
      :label="'Add a Todo:'"
      @saveTodo="saveNewTodo" />
    </div>
    <div class="todo-list">
      <TodoFilters
      :tabs="tabs"
      :total="todoCounter"
      @newFilter="filter = $event" />
      <TodoList
      :todos="filterTodos"
      @editTodo="saveEditTodo"
      @deleteTodo="deleteTodo" />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import ErrorMsg from '@/components/shared/ErrorMsg';
import { mapGetters, mapActions } from 'vuex';

const TodoList = () => ({
  component: import('@/components/TodoList'),
  loading: LoadingSpinner,
  error: ErrorMsg
});

export default {
  name: 'todos',
  components: {
    TodoForm: () => import('@/components/TodoForm'),
    TodoFilters: () => import('@/components/TodoFilters'),
    TodoList
  },
  data: function() {
    return {
      tabs: [
        'All',
        'Active',
        'Done'
      ],
      /** @values All, Active, Done */
      filter: 'All'
    };
  },
  computed: {
    ...mapGetters({
      allTodos: 'todos/allTodos',
      doneTodos: 'todos/doneTodos',
      activeTodos: 'todos/activeTodos'
    }),
    filterTodos: function() {
      if (this.filter == 'Active') return this.activeTodos;
      if (this.filter == 'Done') return this.doneTodos;
      return this.allTodos;
    },
    todoCounter: function() {
      return this.filterTodos.length;
    }
  },
  methods: {
    ...mapActions([
      'todos/saveNewTodo',
      'todos/saveEditTodo',
      'todos/setTodoDone',
      'todos/deleteTodo'
    ]),
    saveNewTodo: async function(todoValue) {
      await this['todos/saveNewTodo']({
        value: todoValue,
        done: false
      });
    },
    saveEditTodo: async function(todoData) {
      await this['todos/saveEditTodo'](todoData);
    },
    deleteTodo: async function(todoIndex) {
      await this['todos/deleteTodo'](todoIndex);
    }
  }
}
</script>

<style lang="sass" scoped>
#todos
  margin: 2rem 0
.repo-link
  display: flex
  justify-content: center
  align-items: center
.new-container
  display: flex
  justify-content: center
.new-container > *
  width: 100%
  +sm()
    width: 50%
  +lg()
    width: 40%
.todo-list
  margin: 2rem 0
</style>