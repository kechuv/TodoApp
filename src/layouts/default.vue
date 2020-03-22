<template>
  <div id="main">
    <main class="container">
      <router-view/>
    </main>
  </div>
</template>

<style lang="sass" scoped>
#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>