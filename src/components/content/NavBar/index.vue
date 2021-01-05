<template>
  <div class="nav-bar">
    <div class="navbar-left">
      <slot name="slot-left"></slot>
    </div>
    <div class="navbar-middle">
      <slot name="slot-middle"></slot>
    </div>
    <div class="navbar-right">
      <slot name="slot-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style lang="scss">
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .navbar-left .navbar-right{
      width: 10%;
    }
    .navbar-middle {
      flex: 1;
    }
  }
</style>