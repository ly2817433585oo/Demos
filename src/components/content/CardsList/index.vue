<template>
  <div class="cards-list">
    <el-row :gutter="20">
      <el-col
        v-for="(info, index) of cardsInfoArr"
        :key="index"
        :span="4"
        :offset="index > 0 ? 0.4 : 0"
      >
        <card :cardInfo="info" @cardClick="click"></card>
      </el-col>
    </el-row>

    <map-dialog
      :pvisible="dialogTabVisible"
      @dislogClose="toggleVis"
      :toPath="toPath"
      destroy-on-close="true"
    ></map-dialog>
  </div>
</template>

<script>
import Card from "./Card";
import MapDialog from "@/components/content/MapDialog";
import { getCards } from "@/api/card.js";

export default {
  name: "CardsList",
  components: {
    Card,
    MapDialog,
  },
  data() {
    return {
      dialogTabVisible: false,
      toPath: "",
      cardsInfoArr: [],
    };
  },
  mounted() {
    console.log("mouted");
    this.cardsInfoArr.length = 0;
    // console.log(this.$route.fullPath.split('/')[1]);
    getCards(this.$route.fullPath.split("/")[1]).then((res) => {
      res.forEach((val) => {
        this.cardsInfoArr.push(val);
      });
    });
  },
  methods: {
    click(param) {
      this.dialogTabVisible = true;
      this.toPath = param;
    },
    toggleVis() {
      this.dialogTabVisible = false;
    },
  },
  watch: {
    $route(to, from) {
      // console.log("route");
      this.cardsInfoArr.length = 0;
      // console.log(this.$route.fullPath.split('/')[1]);
      getCards(this.$route.fullPath.split("/")[1]).then((res) => {
        res.forEach((val) => {
          this.cardsInfoArr.push(val);
        });
      });
    },
  },
};
</script>

<style lang="scss" >
.el-col {
  margin-bottom: 20px;
}
</style>