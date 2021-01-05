<template>
  <div class="map-dialog">
    <el-dialog
     
      :visible.sync="visible"
      width="80%"
      @opened="opened"
      @close="close"
    >
      <router-view :key="routeKey"></router-view>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MapDialog",
  data() {
    return {
      visible: false,
      routeKey: "",
      parentRoute:''
    };
  },
  props: {
    toPath: {
      type: String,
    },
    pvisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: { 
    opened() {
      // console.log(this.$route);
      this.parentRoute = this.$route.fullPath
      this.$router.push({ path: this.$route.fullPath +"/" +this.toPath });
    },
    close() {
      this.visible = false;
      this.$emit("dislogClose");
      this.$router.push({ path: this.parentRoute });
    },
  },
  watch: {
    pvisible(val, oldval) {
      this.visible = val;
      this.routeKey = this.$route.fullpath;
    },
  },
};
</script>

<style lang="scss">
.el-dialog {
  height: 830px;
  overflow: hidden;
  top: -86px;

  .el-dialog__body {
    padding: 0;
    overflow: hidden;
  }
  .el-dialog__header {
    padding: 0px;
  }

  .el-dialog__headerbtn {
    top: 9px;
    right: 12px;
    z-index: 100;
    font-size: 23px;
  }
}
</style>