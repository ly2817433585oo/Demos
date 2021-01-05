<template>
  <div class="user-icon">
    <el-dropdown placement="bottom">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/">
          <el-dropdown-item> Home </el-dropdown-item>
        </router-link>
        <a
          target="_blank"
          href="https://github.com/PanJiaChen/vue-admin-template/"
        >
          <el-dropdown-item>Github</el-dropdown-item>
        </a>
        <a
          target="_blank"
          href="https://panjiachen.github.io/vue-element-admin-site/#/"
        >
          <el-dropdown-item>Docs</el-dropdown-item>
        </a>
        <!-- <el-dropdown-item divided @click.native="logout">
          <span style="display: block">Log Out</span>
        </el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "UserIcon",
};
</script>

<style lang="scss">
  .el-dropdown {
    height: 44px;
  }
</style>