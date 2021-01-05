<template>
  <div class="homepage-navbar">
    <nav-bar>
      <humburger slot="slot-left" :isActive="sidebar.opened" @toggleClick="toggle"></humburger>
      <bread-crumb slot="slot-middle" class="bread-crumb"></bread-crumb>
      <user-icon slot="slot-right" class="user-icon"></user-icon>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/content/NavBar'
import Humburger from '@/components/common/Hamburger'
import BreadCrumb from '@/components/common/Breadcrumb'
import UserIcon from '@/components/common/UserIcon'
import { mapGetters } from 'vuex'


export default {
  name:'HomePageNavBar',
  components:{
    NavBar,
    Humburger,
    BreadCrumb,
    UserIcon
  },
  computed:{
    ...mapGetters(['sidebar'])
  },
  methods:{
    toggle() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss">
  .bread-crumb {
    float: left;
  }

  .user-icon {
    margin-top: 2px;
  }
</style>