<template>
  <transition name="newVersion">
    <div id="refresh" v-if="updateExists" @click="refreshApp">
      <span>New version available! Click here to update.</span>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    };
  },
  created: function() {
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    );
    navigator.serviceWorker.addEventListener(
      'controllerchange', () => {
        if (this.refreshing) return;
        this.refreshing = true;
        window.location.reload();
      }
    );
  },
  methods: {
    showRefreshUI: function(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp: function() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) { return; }
      this.registration.waiting.postMessage('skipWaiting');
    },
  }
}
</script>

<style lang="sass" scoped>
#refresh
  width: 100%
  padding: 1rem
  display: flex
  align-items: center
  justify-content: center
  background-color: $white
  border: 1px solid $red
#refresh > span
  color: $red
  text-decoration: underline
  cursor: pointer
.newVersion-enter-active,
.newVersion-leave-active
  transition: all 0.15s ease-in-out
.newVersion-enter,
.newVersion-leave-to
  opacity: 0
  transform: translateY(1.5rem)
</style>