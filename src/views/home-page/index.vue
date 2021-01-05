<template>
  <div class="home-page">
    <el-container>
      <el-aside :width="asideWidth" >
        <side-bar></side-bar>
      </el-aside>
      <el-container class="main-container">
        <el-header height="44px">
          <nav-bar></nav-bar>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
        <el-footer> footer </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavBar from "./child-compnents/NavBar";
import SideBar from "./child-compnents/SideBar";

import AppMain from './child-compnents/AppMain'
import { mapGetters } from 'vuex';

export default {
  name: "HomePage",
  components: {
    NavBar,
    SideBar,
    AppMain,
  },computed:{
    ...mapGetters([
      'sidebar'
    ]),
    asideWidth() {
      return this.sidebar.opened? '210px':'64px'
    }
  }
  
};
</script>

<style lang="scss" >
.el-container {
  height: 100vh;

  .el-main {
    border-top: 1px solid #eee;
    background-color: #f4f4f4;
    border-bottom: 1px solid #eee;
    padding: 4px;
  }
}
</style>