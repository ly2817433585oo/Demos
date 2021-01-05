<template></template>

<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: "/" + path, query });
  },
  render(h) {
    return h() // avoid warning message 避免警告消息
  }
};
</script>

<style>
</style>