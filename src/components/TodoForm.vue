<template>
  <form @submit.prevent="saveTodo" autocomplete="off">
    <div class="input-container">
      <label
      v-if="label"
      :for="componentID">{{label}}</label>
      <textarea
      :id="componentID"
      :name="componentID"
      placeholder="Press enter to add"
      v-model="val"
      @keypress.enter.exact.prevent="saveTodo"
      @keyup.esc="$emit('cancel')"
      @focusout="$emit('cancel')"></textarea>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: null
    },
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  data: function() {
    return {
      val: this.value
    };
  },
  computed: {
    componentID: function() {
      return `todo-${this.id}`;
    }
  },
  mounted: function() {
    this.$el.elements[this.componentID].select();
  },
  methods: {
    saveTodo: async function() {
      if (this.val.trim().length > 0) this.$emit('saveTodo', this.val.trim());
      this.val = null;
    }
  }
}
</script>

<style lang="sass" scoped>
form
  width: 100%
  display: flex
  justify-content: flex-start
.input-container
  width: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
.input-container > label
  font-weight: bold
  margin-bottom: 0.5rem
.input-container > textarea
  width: 100%
  height: 100%
  max-height: 300px
  background-color: transparent
  resize: vertical
  border: none
  border-bottom: 1px solid $mid_gray
  outline: none
  font-size: 1rem
  &:focus
    border-bottom: 1px solid $black
</style>