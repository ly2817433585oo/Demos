<template>
  <div class="app-main">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  data () {
    return {
      transitionName:''  
    }
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },watch: {
  '$route'(to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth >= fromDepth ? 'fade-transform' : ''  
  }
}
};
</script>

<style>
</style>