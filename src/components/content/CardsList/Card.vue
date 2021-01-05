<template>
  <div class="card-container" @click="click(cardInfo)">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" >
      <img :src="imgPath" />
      <span>{{ cardTitle }}</span>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cardInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      noImage:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    };
  },
  computed: {
    imgPath() {
      return !!this.cardInfo.imgPath ? this.cardInfo.imgPath : this.noImage;
    },
    cardTitle() {
      return !!this.cardInfo.title ? this.cardInfo.title : "No Title!";
    },
  },
  methods: {
    click(item) {
      this.$emit("cardClick",item.route);
    },
  },
};
</script>

<style lang="scss">
.el-card {
  padding: 5px;
  width: 220px;
  padding-bottom: 10px;
  img {
    width: 100%;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
  }
}
</style>