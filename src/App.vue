<template>
  <div id="app">
    <router-view/>
    <NewVersion />
  </div>
</template>

<script>
import NewVersion from '@/components/shared/NewVersion';

export default {
  components: {
    NewVersion
  }
}
</script>

<style lang="sass">
#app
  margin: 0
  height: 100%
</style>