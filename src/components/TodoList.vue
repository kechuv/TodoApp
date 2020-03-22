<template>
  <ul>
    <transition-group name="list">
      <li
      v-for="todo in todos"
      :key="todo.index">
        <!-- Edit todo input -->
        <div
        class="editTodo"
        v-if="isEditing == todo.index">
          <div class="form">
            <!-- 
              @event saveTodo
              @prop {string} $event -> newValue
              @prop {Todo} todo
              @prop {string} prop - Todo prop to change
             -->
            <TodoForm
            :id="`${todo.index}`"
            :value="todo.value"
            @saveTodo="editTodo($event, todo, 'value')"
            @cancel="isEditing = null" />
          </div>
          <div class="actions">
            <span
            class="link"
            @click="isEditing = null"
            >Cancel</span>
          </div>
        </div>
        <!-- todo text -->
        <div
        class="showTodo"
        v-else>
          <div>
            <!-- 
              @event change
              @prop {boolean} $event -> newValue
              @prop {Todo} todo
              @prop {string} prop - Todo prop to change
             -->
            <input
            type="checkbox"
            :name="`done-${todo.index}`"
            :id="`done-${todo.index}`"
            :checked="todo.done"
            @change="editTodo($event.target.checked, todo, 'done')" />
            <p
            :class="['clickable', { 'done': todo.done }]"
            @click="isEditing = todo.index">{{todo.value}}</p>
          </div>
          <span
          class="link"
          @click="deleteTodo(todo.index)"
          >Delete</span>
        </div>
      </li>
    </transition-group>
  </ul>
</template>

<script>
/**
 * @typedef {object} Todo
 * @prop {boolean} done
 * @prop {number} index
 * @prop {string} value
 */
export default {
  components: {
    TodoForm: () => import('@/components/TodoForm.vue')
  },
  props: {
    /** @type {Todo[]} */
    todos: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data: function() {
    return {
      isEditing: null
    };
  },
  methods: {
    /**
     * @param {string|boolean} newValue New todo value
     * - if (prop == 'value') newValue = string
     * - if (prop == 'done') newValue = true/false
     * @param {Todo} todo
     * @param {string} prop Property to update
     * - Value: Todo value
     * - Done: Todo 'done' status
    */
    editTodo: function(newValue, todo, prop) {
      const newTodo = {
        value: prop === 'value' ? newValue : todo.value,
        done: prop === 'done' ? newValue : todo.done,
        index: todo.index
      }
      this.$emit('editTodo', newTodo);
      this.isEditing = null;
    },
    deleteTodo: function(todoIndex) {
      this.$emit('deleteTodo', todoIndex);
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
  padding: 0
  margin: 0
li
  border-bottom: 1px solid $light_gray
  padding: 1.8rem 0
.showTodo, .editTodo
  display: flex
  justify-content: space-between
  align-items: center
.editTodo > .form
  width: 80%
  +md()
    width: 100%
    max-width: 300px
.showTodo > div
  display: flex
  align-items: center
  width: 80%
  +lg()
    width: 60%
.showTodo > div > input
  margin-right: 0.5rem
.done
  text-decoration: line-through
.list-enter-active,
.list-leave-active
  transition: all 0.15s ease-in-out
.list-enter,
.list-leave-to
  opacity: 0
  transform: translateY(-1.5rem)
</style>