<template>
  <header>
    <nav>
      <span
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['link', { 'active': index == active }]"
      @click="selectFilter(tab, index)">{{tab}}</span>
    </nav>
    <p>Total: {{total}}</p>
  </header>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => ([])
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data: function() {
    return {
      active: 0
    };
  },
  methods: {
    selectFilter: function(tab, tabIndex) {
      this.active = tabIndex;
      this.$emit('newFilter', tab);
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0.5rem 0
  border-bottom: 1px solid $mid_gray
  font-size: 0.8rem
nav, p
  display: flex
nav > span
  margin-right: 1rem
p
  margin: 0
</style>